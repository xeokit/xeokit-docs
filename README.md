# xeokit Documentation Website

## Overview

This website serves as the comprehensive documentation portal for xeokit, built using [Docusaurus](https://docusaurus.io/), a modern static website generator. The site combines various content sources to provide a seamless documentation experience for all xeokit products.

## For Management Team

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

## For Developers

### Technical Architecture

Docusaurus serves as the main framework, with specialized plugins:
- `@docusaurus/plugin-content-pages`: For static pages
- `@docusaurus/plugin-content-blog`: For blog posts and announcements
- `@docusaurus/plugin-content-docs`: For documentation content

The repository includes git submodules in the `_submodule` folder, which contain source content that is processed to generate documentation.

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


### Multiple source of content

The documentation content comes from multiple sources:
1. Markdown files in the `docs/` directory
2. Generated content from submodules using scripts in `content-generators/`
3. Blog posts in the `blog/` directory
4. Static pages in the `src/pages/` directory

### Deployment

#### Automated Deployment
GitHub Actions is configured for automated deployment.

#### Manual Deployment
For manual deployment from localhost, use the Ansible stack:

1. Set up the Python environment:
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   uv sync --project .deploy
   source .deploy/.venv/bin/activate
   ```

2. Run the deployment (using [Task](https://taskfile.dev/)):
   ```bash
   task ansible:deploy
   ```

## TODO

- Enable indexing after migration to production: update robots.txt and docusaurus.config.ts
- Complete the migration of legacy documentation
- Improve search functionality

## Contributing

We welcome contributions from both technical and non-technical team members:

1. For content changes, submit a pull request with your proposed changes
2. For architectural or design suggestions, open an issue with the "enhancement" label
3. For bug reports, open an issue with the "bug" label


## License

[Add appropriate license information here]