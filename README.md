# tslib-template

**A modern, minimal, runtime-agnostic TypeScript library template**

This is my personal template, crafted to kickstart TypeScript libraries with best-in-class tooling, continuos integration, and a focus on developer experience.

## 🚀 Features

- ⚡ [**tsdown**](https://tsdown.dev/) — Super fast TypeScript build system with modern output
- 🧹 [**Biome**](https://biomejs.dev/) — Next-gen and fast code formatter & linter
- 🔬 [**Vitest**](https://vitest.dev/) — Next-gen unit testing framework
- 📦 [**pnpm**](https://pnpm.io/) — Performant, disk-efficient package manager
- 🛡️ [**CI**](https://docs.github.com/en/actions) — Automated build and tests for Node.js & Bun
- 🚀 [**Auto publishing**](https://www.npmjs.com/) - Safe and automated releases with [Github provenance](https://github.blog/security/supply-chain-security/introducing-npm-package-provenance/) support

## 🛠️ Getting Started

### 1. Use This Template

- Click [**"Use this template"**](https://github.com/arobsn/tslib-template/generate)
- or clone manually:

```sh
git clone https://github.com/arobsn/tslib-template.git your-lib-name
cd your-lib-name
pnpm install
```

### 2. Update Project Info

- Edit [`package.json`](package.json) (`name`, `description`, `author`, etc.)
- Update [`LICENSE`](LICENSE) and [`README.md`](README.md) as needed

### 3. Start Coding

- Source files go in `src/`.
- Export your main API from `src/index.ts`.

### 4. Publish Your Library

1. Make sure that `publishConfig` & `repository` are set accordingly in [`package.json`](package.json)
2. Ensure `NPM_TOKEN` is set in repository secrets (see instruction on [how to create an `Automation` npm token](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-access-tokens) and [how to set it as a repository secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository))
3. [Create a release on GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) to trigger publish workflow

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

## 🤖 Continuous Integration

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) - Tests all pushes/PRs on Node.js & Bun
- [`.github/workflows/publish.yml`](.github/workflows/publish.yml) - Publishes the package to NPM every time a new Github release is created

## A note on Github/npm Provenance

This template supports [provenance](https://github.blog/security/supply-chain-security/introducing-npm-package-provenance/) for secure and transparent releases. **Provenance** allows users to verify that the published npm package was built from the source in your repository.

**For provenance to work properly, you must:**

- Use a **public GitHub repository** (provenance only works for public repos)
- Ensure your `package.json` contains:
  - `"publishConfig": { "access": "public", "registry": "https://registry.npmjs.org/" }` (✅ already set in this template)
  - A correct `"repository"` field (GitHub HTTPS or git+https URL matching your repository name)
  - A `"license"` field (e.g., `"MIT"`) (✅ already set, but you must choose yours)
- Publish using GitHub Actions with OIDC and the `--provenance` flag (✅ already set)
- Use npm CLI v9.6.0+ for publishing (✅ already set)
- Set your `NPM_TOKEN` secret in the repo settings

> If your repo is private, or your package is scoped/private, provenance will **not** be generated.

### Disabling Provenance

If you do **not** want provenance statements when publishing to npm (e.g., if you encounter issues or your workflow doesn't require it), you can disable it:

1. **Edit** [`.github/workflows/publish.yml`](.github/workflows/publish.yml)
2. **Remove** the `--provenance` flag from both `npm publish` commands.

```diff
- run: npm publish --provenance
+ run: npm publish

- run: npm publish --tag beta --provenance
+ run: npm publish --tag beta
```

3. Save and commit the changes.

Without the `--provenance` flag, npm will not attempt to attach provenance statements to your package.

### See more:

- [[npm] Provenance Docs](https://docs.npmjs.com/generating-provenance-statements)
- [[github] GitHub Actions for npm provenance](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages)
- [[npm] Creating and viewing access tokens](https://docs.npmjs.com/creating-and-viewing-access-tokens)
- [[github] Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
