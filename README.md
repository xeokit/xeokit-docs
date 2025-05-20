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
`rp.xeokit.io` - traefik, reverse proxy
`xeokit.io` - docusaurus build served by nginx, single source of truth
`sdk-examples.xeokit.io` - vite build served by nginx, sdk v3 typescript examples

