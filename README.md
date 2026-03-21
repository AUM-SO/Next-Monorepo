# Next.js Monorepo

A Next.js monorepo powered by [Turborepo](https://turbo.build/repo), [Bun](https://bun.sh), and [shadcn/ui](https://ui.shadcn.com).

## Project Structure

```text
apps/
  web/           # Main web application (Next.js)
  web-admin/     # Admin dashboard (Next.js)
packages/
  ui/            # Shared UI components (shadcn/ui)
  eslint-config/ # Shared ESLint configuration
  typescript-config/ # Shared TypeScript configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) >= 20
- [Bun](https://bun.sh) >= 1.3.9

### Installation

```bash
bun install
```

### Development

```bash
# Run web app
bun run dev:web

# Run admin app
bun run dev:web-admin

# Run all apps
bun run dev:full
```

### Build

```bash
bun run build
```

### Lint & Format

```bash
bun run lint
bun run format
bun run typecheck
```

## Adding UI Components

Add shadcn/ui components to the shared `packages/ui` package:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Then import from the `ui` package:

```tsx
import { Button } from "@workspace/ui/components/button";
```
