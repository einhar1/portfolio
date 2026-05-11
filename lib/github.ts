type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  private: boolean;
  archived: boolean;
  fork: boolean;
  updated_at: string;
};

type TokenResolver = (owner?: string) => string | undefined;

export type PortfolioRepo = {
  id: number;
  title: string;
  description: string;
  href: string | null;
  tags: string[];
  isPrivate: boolean;
  org?: string;
};

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? "", 10);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }

  return parsed;
}

function toBoolean(value: string | undefined, fallback = false): boolean {
  if (value === undefined) {
    return fallback;
  }

  return value.toLowerCase() === "true";
}

function normalizeToken(rawToken: string | undefined): string | undefined {
  if (!rawToken) {
    return undefined;
  }

  const trimmedToken = rawToken.trim();

  if (
    trimmedToken.length === 0 ||
    trimmedToken === "replace_with_github_token"
  ) {
    return undefined;
  }

  return trimmedToken;
}

function parseOwnerTokens(value: string | undefined): Map<string, string> {
  const tokenMap = new Map<string, string>();

  if (!value) {
    return tokenMap;
  }

  const entries = value
    .split(";")
    .map((entry) => entry.trim())
    .filter(Boolean);

  for (const entry of entries) {
    const [ownerPart, ...tokenParts] = entry.split("=");
    const owner = ownerPart?.trim().toLowerCase();
    const token = normalizeToken(tokenParts.join("=")?.trim());

    if (!owner || !token) {
      continue;
    }

    tokenMap.set(owner, token);
  }

  return tokenMap;
}

function extractOwnerFromRepoFullName(repoFullName: string): string {
  return repoFullName.split("/")[0]?.toLowerCase() ?? "";
}

function createTokenResolver(
  githubUsername: string,
  fallbackToken: string | undefined,
  ownerTokens: Map<string, string>,
): TokenResolver {
  const normalizedUsername = githubUsername.toLowerCase();

  return (owner?: string) => {
    const normalizedOwner = owner?.toLowerCase();

    if (normalizedOwner && ownerTokens.has(normalizedOwner)) {
      return ownerTokens.get(normalizedOwner);
    }

    if (
      normalizedOwner === normalizedUsername &&
      ownerTokens.has(normalizedUsername)
    ) {
      return ownerTokens.get(normalizedUsername);
    }

    return fallbackToken;
  };
}

async function fetchGitHubJson<T>(
  url: string,
  githubToken?: string,
): Promise<T | null> {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {}),
    },
    next: { revalidate: 60 * 60 },
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as T;
}

function getNormalizedRepoMap(repos: GitHubRepo[]): Map<string, GitHubRepo> {
  const map = new Map<string, GitHubRepo>();

  for (const repo of repos) {
    map.set(repo.name.toLowerCase(), repo);
    map.set(repo.full_name.toLowerCase(), repo);
  }

  return map;
}

function toPortfolioRepo(
  repo: GitHubRepo,
  githubUsername: string,
  maxTopics: number,
): PortfolioRepo {
  const [owner] = repo.full_name.split("/");
  const isOrgRepo =
    owner && owner.toLowerCase() !== githubUsername.toLowerCase();

  const languageTag = (repo.language ?? "Code").trim();
  const uniqueTopicTags: string[] = [];
  const seenTags = new Set<string>([languageTag.toLowerCase()]);

  for (const topic of repo.topics ?? []) {
    const normalizedTopic = topic.trim();
    if (!normalizedTopic) {
      continue;
    }

    const normalizedKey = normalizedTopic.toLowerCase();
    if (seenTags.has(normalizedKey)) {
      continue;
    }

    seenTags.add(normalizedKey);
    uniqueTopicTags.push(normalizedTopic);

    if (uniqueTopicTags.length >= maxTopics) {
      break;
    }
  }

  const uniqueTags = [languageTag, ...uniqueTopicTags];

  return {
    id: repo.id,
    title: repo.name,
    description: repo.description ?? "No description provided yet.",
    href: repo.private ? null : repo.html_url,
    tags: uniqueTags,
    isPrivate: repo.private,
    org: isOrgRepo ? owner : undefined,
  };
}

async function fetchPinnedRepos(
  pinnedRepoNames: string[],
  resolveToken: TokenResolver,
  includePrivateRepos: boolean,
): Promise<GitHubRepo[]> {
  const fetchedRepos: GitHubRepo[] = [];

  for (const repoName of pinnedRepoNames) {
    const [owner, repo] = repoName.split("/");
    if (!owner || !repo) {
      continue;
    }

    const token = resolveToken(owner);
    const found = await fetchGitHubJson<GitHubRepo>(
      `https://api.github.com/repos/${owner}/${repo}`,
      token,
    );

    if (found && (includePrivateRepos || !found.private)) {
      fetchedRepos.push(found);
    }
  }

  return fetchedRepos;
}

async function enrichReposWithTopics(
  repos: GitHubRepo[],
  resolveToken: TokenResolver,
): Promise<GitHubRepo[]> {
  const enrichedRepos = await Promise.all(
    repos.map(async (repo) => {
      if (repo.topics && repo.topics.length > 0) {
        return repo;
      }

      const repoOwner = extractOwnerFromRepoFullName(repo.full_name);
      const githubToken = resolveToken(repoOwner);

      const repoDetails = await fetchGitHubJson<GitHubRepo>(
        `https://api.github.com/repos/${repo.full_name}`,
        githubToken,
      );

      return repoDetails ?? repo;
    }),
  );

  return enrichedRepos;
}

export async function getPortfolioRepos(limit = 6): Promise<PortfolioRepo[]> {
  const githubUsername = process.env.GITHUB_USERNAME ?? "einhar1";
  const pinnedRepoNames = (process.env.GITHUB_PINNED_REPOS ?? "")
    .split(",")
    .map((repoName) => repoName.trim())
    .filter(Boolean);

  // Return empty array if no pinned repos
  if (pinnedRepoNames.length === 0) {
    return [];
  }

  const includePrivateRepos = toBoolean(
    process.env.GITHUB_INCLUDE_PRIVATE_REPOS,
  );
  const maxTopics = parsePositiveInt(process.env.GITHUB_MAX_TOPICS_PER_REPO, 3);
  const ownerTokens = parseOwnerTokens(process.env.GITHUB_OWNER_TOKENS);

  const githubToken = normalizeToken(process.env.GITHUB_TOKEN);
  const resolveToken = createTokenResolver(
    githubUsername,
    githubToken,
    ownerTokens,
  );

  // Fetch only the pinned repos
  const repos = await fetchPinnedRepos(
    pinnedRepoNames,
    resolveToken,
    includePrivateRepos,
  );

  // Maintain the order from pinnedRepoNames
  const reposByName = getNormalizedRepoMap(repos);
  const orderedRepos = pinnedRepoNames
    .map((repoName) => reposByName.get(repoName.toLowerCase()))
    .filter((repo): repo is GitHubRepo => Boolean(repo));

  const limitedRepos = orderedRepos.slice(0, limit);
  const reposWithTopics = await enrichReposWithTopics(
    limitedRepos,
    resolveToken,
  );

  return reposWithTopics.map((repo) =>
    toPortfolioRepo(repo, githubUsername, maxTopics),
  );
}
