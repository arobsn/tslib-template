# 📦 tslib-template

A **modern, minimal, runtime-agnostic TypeScript library template** —  
This is my personal template, crafted to kickstart TypeScript libraries with best-in-class tooling, reproducible builds, and a focus on developer experience.

## 🚀 Features

- ⚡ [**tsdown**](https://tsdown.dev/) — Fast TypeScript build system with modern output
- 🧹 [**Biome**](https://biomejs.dev/) — Blazing fast code formatter & linter
- 🔬 [**Vitest**](https://vitest.dev/) — Next-gen blazing fast unit testing
- 📦 [**pnpm**](https://pnpm.io/) — Performant, disk-efficient package manager
- 🛡️ [**CI**](https://docs.github.com/en/actions) — Automated build and tests for Node.js & Bun
- 📦 [**Auto NPM publishing**](https://www.npmjs.com/) - Safe and automated releases with [Github provenance](https://github.blog/security/supply-chain-security/introducing-npm-package-provenance/) support

## 🛠️ Getting Started

### 1. Use This Template

Click [**"Use this template"**](https://github.com/arobsn/tslib-template/generate)  
or clone manually:

```sh
git clone https://github.com/arobsn/tslib-template.git my-lib
cd my-lib
pnpm install
```

### 2. Update Project Info

- Edit `package.json` (`name`, `description`, `author`, etc.)
- Update `LICENSE` and `README.md` as needed

### 3. Start Coding

Source files go in `src/`.  
Export your main API from `src/index.ts`.

## 🧪 Scripts

| Script               | Description                    |
| -------------------- | ------------------------------ |
| `pnpm build`         | Build the library using tsdown |
| `pnpm build:watch`   | Watch & rebuild on changes     |
| `pnpm lint:check`    | Lint code with Biome           |
| `pnpm lint:fix`      | Auto-fix lint issues           |
| `pnpm format:check`  | Check formatting with Biome    |
| `pnpm format:fix`    | Format code with Biome         |
| `pnpm test`          | Run unit tests with Vitest     |
| `pnpm test:watch`    | Watch mode for tests           |
| `pnpm test:coverage` | Test with coverage report      |

## 🧰 Tooling

- **tsdown**: See [`tsdown.config.ts`](tsdown.config.ts)
- **Biome**: See [`biome.jsonc`](biome.jsonc)
- **Vitest**: See [`vitest.config.ts`](vitest.config.ts)
- **pnpm**: Lockfile & scripts, use `pnpm` for all commands

## 🤖 Continuous Integration

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) - Tests all pushes/PRs on Node.js & Bun
- [`.github/workflows/ci.yml`](.github/workflows/publish.yml) - Publishes the package to NPM every time a new Github release is created

## 📝 Publish Your Library

- 1. Update `publishConfig` & `repository` in `package.json`
- 2. Ensure `NPM_TOKEN` is set in repository secrets
- 3. Create a release on GitHub to trigger publish workflow
