import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: 'Pear',
  tagline: 'PE Answers Repository',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://pinethreee.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pinethreee', // Usually your GitHub org/user name.
  projectName: 'pe', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'answers',
          path: 'docs/answers',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: true,
          sidebarCollapsible: true,
          editUrl: 'https://github.com/pinethreee/pe/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  scripts: [
      'https://unpkg.com/graphre@0.1.3/dist/graphre.js',
      'https://unpkg.com/nomnoml@1.7.0/dist/nomnoml.js'
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css'
    }
  ],
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    algolia: {
      appId: '7IF30EL09N',
      apiKey: '3e61706213550b96176af29587bef541',
      indexName: 'pinethreee.github.io',
      contextualSearch: true,
      // searchPagePath: 'search',
    },
    metadata: [
      {
        name: 'algolia-site-verification',
        content: 'BA59C8B421579332',
      }
    ],
    navbar: {
      title: 'Pear',
      logo: {
        alt: 'Wanna PE?',
        src: 'img/logo.png',
      }
    },
    footer: {
      copyright: `(c)${new Date().getFullYear()} Green.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
