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
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          petstore: {
            specPath: "demo-openapi/petstore.yaml",
            outputDir: "docs/plugins/demo-openapi",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ],
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
        src: 'img/xeokitLogoAlphaBG.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docSidebar',
          sidebarId: 'pluginsSidebar',
          position: 'left',
          label: 'Plugins',
        },
        {
          type: 'docSidebar',
          sidebarId: 'productsSidebar',
          position: 'left',
          label: 'Products',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'xeoKitSdkSidebar',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {
          type: 'dropdown',
          position: 'left',
          label: 'External',
          items: [
            {
              label: 'xeokit-sdk-typedoc',
              href: '/external/type-doc',
            },
            {
              label: 'typedoc-typescript-example',
              href: '/external/type-doc-example',
            }
          ]
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Examples',
          items: [
            {
              label: 'xeokit-sdk',
              href: '/examples/xeokit-sdk',
            },
            {
              label: "xeokit-bim-viewer",
              href: "/examples/xeokit-bim-viewer",
            },
            {
              label: "xeovision",
              href: "https://xeo.vision",
              target: "_blank",
            }
          ]
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'New Examples',
          items: [
            {
              type: 'docSidebar',
              label: 'xeokit-sdk',
              sidebarId: 'xeokitExamples',
            },
            {
              type: 'docSidebar',
              label: 'sdk',
              sidebarId: 'sdkExamples',
            },
            {
              label: "sdk-playground",
              href: "https://stackblitz.com/edit/vitejs-vite-pqcbgvmu?file=index.html&terminal=dev",
              target: "_blank",
            },
          ]
        },

        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/xeokit/xeokit-sdk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Examples',
              href: 'https://xeokit.github.io/xeokit-sdk/examples',
            },
          ],
        },
        {
          title: 'Develop',
          items: [
            {
              label: 'API Docs',
              href: 'https://xeokit.github.io/xeokit-sdk/docs',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://www.facebook.com/CreooxAG',
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
        src: 'img/xeokitLogoAlphaBG.png',
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
