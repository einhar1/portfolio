# Portfolio

Personal portfolio site built with Next.js and deployed to GitHub Pages.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm

## Local Development

1. Install dependencies
   - `pnpm install`
2. Start the dev server
   - `pnpm dev`
3. Open `http://localhost:3000`

## Available Scripts

- `pnpm dev` — start development server
- `pnpm build` — production build
- `pnpm start` — run production build locally
- `pnpm lint` — run ESLint
- `pnpm format` — run Prettier on the repo

## GitHub API Configuration

This project can fetch and show pinned repositories using environment variables:

- `GITHUB_USERNAME`
- `GITHUB_PINNED_REPOS` (comma-separated, e.g. `owner/repo,owner/repo`)
- `GITHUB_TOKEN` (optional)
- `GITHUB_OWNER_TOKENS` (optional, format: `owner=token;owner=token`)
- `GITHUB_INCLUDE_PRIVATE_REPOS` (`true`/`false`, optional)
- `GITHUB_MAX_TOPICS_PER_REPO` (optional, default: `3`)

For GitHub Pages deployments in this repo, these are supplied through repository variables/secrets in the workflow.

## Deployment

Deployments run through GitHub Actions using `.github/workflows/deploy.yml` and publish the static output to GitHub Pages.
