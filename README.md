# xeokit Documentation Website

## Overview

This website serves as the comprehensive documentation portal for xeokit, built using [Docusaurus](https://docusaurus.io/), a modern static website generator. The site combines various content sources to provide a seamless documentation experience for all xeokit products.

### Project Goals

- Create a unified documentation platform for all xeokit products
- Improve user experience through better organization and search capabilities
- Enable easier content maintenance and updates
- Support multiple documentation formats (API references, guides, tutorials)
- Maintain consistent branding and styling across all documentation

### Contribution Opportunities

- **Content Review**: Provide feedback on documentation clarity and completeness
- **User Experience**: Suggest improvements for navigation and information architecture
- **Prioritization**: Help identify which documentation areas need the most attention
- **Use Case Examples**: Contribute real-world examples of how xeokit is used

### Current Status

The project integrates content from multiple sources:
- Newly authored Docusaurus content
- Transformed content from existing documentation
- SDK examples embedded as iframes
- API documentation generated from code

## For Contributors

### Technical Architecture

Docusaurus serves as the main framework, with specialized plugins:
- `@docusaurus/plugin-content-pages`: For static pages
- `@docusaurus/plugin-content-blog`: For blog posts and announcements
- `@docusaurus/plugin-content-docs`: For documentation content

The repository includes git submodules in the `_submodule` folder, which contain source content that is processed to generate documentation.

### Multiple source of content

The documentation content comes from multiple sources:
1. Markdown files in the `docs/` directory
2. Generated content from submodules using scripts in `content-generators/`
3. Blog posts in the `blog/` directory
4. Static pages in the `src/pages/` directory

### Deployment Architecture

The deployment consists of:
- `rp.xeokit.io`: Traefik reverse proxy
- `xeokit.io`: Docusaurus build served by nginx (main documentation)
- `sdk-examples.xeokit.io`: Vite build for SDK v3 TypeScript examples

### Getting Started

#### Development 

1. Clone the repository and initialize submodules:
   ```bash
   git clone <repository-url>
   cd xeokit-docs
   git submodule update --init --recursive
   ```

   It will take a while as submodule repositories are quite big.

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create .env file.
    ```bash
    cp .env.localdev .env
    ```
    At current stage `envs` are required for content generation, and docker. 

4. Generate SDK documentation:
   ```bash
   pnpm run doc:sdk:generate
   ```

5. Start the development server:
   ```bash
   pnpm run doc:start
   ```

# Test build locally

1. Build project:
   ```bash
   pnpm run doc:build
   ```

2. Build project:
   ```bash
   pnpm run doc:serve
   ```

# Test build in close to production environment

1. Prepare, build, and run service
   ```bash
   task docker:prepare-env TARGET=localhost
   task docker:compose-build
   task docker:compose-up
   ```

2. Browse websites:

   ```
   https://rp.xeokit.localhost
   https://xeokit.localhost
   https://sdk-examples.xeokit.localhost/
   ```
3. Down services:

   ```bash
   task docker:compose-down
   ```

### Deployment

#### Automated Deployment
GitHub Actions is configured for automated deployment from main branch.

#### Manual Deployment
For manual deployment from localhost, use the Ansible stack:

1. Set up the Python environment:
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   uv sync --project .deploy
   source .deploy/.venv/bin/activate
   ```

2. Login to tailnet:
   ```bash
   tailscale login
   ```   
3. Run the deployment (using [Task](https://taskfile.dev/)):

   ```bash
   task ansible:deploy
   ```

## Contributing

We welcome contributions from both technical and non-technical team members:

1. For content changes, submit a pull request with your proposed changes
2. For architectural or design suggestions, open an issue with the "enhancement" label
3. For bug reports, open an issue with the "bug" label


## License

[Add appropriate license information here]

# Development Style Guide

## Code Style & Linting

This repository uses ESLint 9 with the stylistic package for consistent code formatting and linting.

### Setup & Usage

1. **Manual linting**: Run `pnpm lint:fix` to automatically fix linting issues
2. **VS Code integration**: 
   - Install recommended extensions from the `.vscode` folder
   - With proper IDE configuration, files will be linted automatically on save
3. **Pre-commit hooks**:
   - Husky runs lint-staged to check and fix staged files
   - Commits will be blocked if automatic fixes aren't possible

## Git Workflow

### Branching Strategy

#### Development
1. Create feature branches from `develop`
2. After rebasing from `develop`, open a Pull Request back into `develop`

#### Deployment
`main` branch should never be ahead of `develop`.
For that reason use `git merge origin/develop --ff-only`

### Commit Messages

- Use [Conventional Commits](https://www.conventionalcommits.org/) format
- Husky pre-commit hook validates messages against `commitlint.config.mjs`
- Invalid commit messages will be rejected



