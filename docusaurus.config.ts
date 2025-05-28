import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'xeokit',
  tagline: 'Web programming toolkit',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xeokit.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xeokit', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // [
    //   'docusaurus-plugin-openapi-docs',
    //   {
    //     id: "api", // plugin id
    //     docsPluginId: "classic", // configured for preset-classic
    //     config: {
    //       petstore: {
    //         specPath: "demo-openapi/petstore.yaml",
    //         outputDir: "docs/plugins/demo-openapi",
    //         sidebarOptions: {
    //           groupPathsBy: "tag",
    //         },
    //       } satisfies OpenApiPlugin.Options,
    //     }
    //   },
    // ],
    // [
    //   'docusaurus-plugin-typedoc',

    //   // Options
    //   {
    //     out: 'docs/plugins/demo-typedoc',
    //     entryPoints: ['demo-typedoc/src/index.ts'],
    //     tsconfig: 'demo-typedoc/tsconfig.json',
    //   },
    // ]
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
    "@docusaurus/theme-live-codeblock",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'xeokit',
      logo: {
        alt: 'xeokit Logo',
        src: 'img/xeokit.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'productsSidebar',
        //   position: 'left',
        //   label: 'Products',
        // },
        {
          type: 'dropdown',
          position: 'left',
          label: 'SDK v2 (current)',
          items: [
            {
              label: 'API',
              href: '/sdk-v2/api',
            },
            {
              label: 'SDK Examples',
              href: '/sdk-v2/sdk-examples',
            },
            {
              label: "BIM Viewer Examples",
              href: "/sdk-v2/bim-viewer-examples",
            },
            {
              label: "Model Conversion",
              href: "/sdk-v2/model-conversion",
            },
            {
              label: "xeoVision",
              href: "https://xeo.vision",
              target: "_blank",
            },
            {
              label: "Source Code",
              href: "https://github.com/xeokit/xeokit-sdk",
              target: "_blank",
            },
          ]
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'SDK v3 (upcoming)',
          items: [
            {
              type: 'docSidebar',
              label: 'SDK Examples',
              sidebarId: 'sdkV3ExamplesSidebar',
            },
            {
              label: "Source Code",
              href: "https://github.com/xeokit/sdk",
              target: "_blank",
            },
          ]
        },
        {to: '/blog/tags/use-cases', label: 'Use Cases', position: 'right'},

        {to: '/blog', label: 'Blog', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'SDK Examples',
              href: '/sdk-v2/sdk-examples',
            },
          ],
        },
        {
          title: 'Develop',
          items: [
            {
              label: 'API',
              href: '/sdk-v2/api',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/xeolabs',
            },
            {
              label: 'X',
              href: 'https://twitter.com/xeolabs',
            },
          ],
        },
      ],
      logo: {
        alt: 'xeokit Logo',
        src: 'img/xeokit.svg',
        href: 'https://xeokit.io',

      },
      copyright: `Copyright © ${new Date().getFullYear()} xeolabs and Creoox AG.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
