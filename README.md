
# TODO

* enable indexing after migration to production: robots.txt, and docusaurus.config.ts

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

# Goal
Docusaurus is used as `main part` ot this project. It creates blog and documentation content.

There are git submodules in `_submodule` folder. Some parts of those repositories are used after some polishing to generate content for documentation. Typically there are scripts which reads submodule content and then generate markdowns, and copy some static files.

Parts of existing/old documentations which cannot be transformed because of complexity or time are planned to be embedded as iframe in docusaurus pages.

New planned parts of documentation which cannot be served as static files by docusaurus are aims to be embed as iframes too

As result docusaurus is router for whole documentation for xeokit, and gives user to browser all aspects of xeokit without leaving a page.


# Deployment architecture

## Docker compose stack

* `rp.xeokit.io` - traefik, reverse proxy
* `xeokit.io` - docusaurus build served by nginx, single source of truth
* `sdk-examples.xeokit.io` - vite build served by nginx, sdk v3 typescript examples

# Working with project

## Docusaurus

```bash
git submodule update --init --recursive   # To initialize, fetch and checkout any nested submodules
pnpm run install                          # To install docusaurus dependencies
pnpm run doc:sdk:generate                 # To create documentation content from _submodules
pnpm run doc:start                        # To run development server
```

## Deployment

Github Action is prepared for automated deployment.

For manual deployment from localhost you need `ansible` stack. You can use "self contained" setup:

``` bash
curl -LsSf https://astral.sh/uv/install.sh | sh   # To install `uv` as python manager
uv sync --project .deploy                         # To create python virtualenv and install ansible within it
source .deploy/.venv/bin/activate                 # To activate virtualenv and get access to ansible stack
```

To run deployment ([Task](https://taskfile.dev/) - task runner is recommended):

```bash
task ansible:deploy   # To run ansible-playbook with required options
```