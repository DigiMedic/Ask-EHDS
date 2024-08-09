import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ask-EHDS',
  tagline: 'Evropský prostor pro zdravotní data',
  favicon: 'img/favicon.ico',

  url: 'https://ask-ehds.eu',
  baseUrl: '/',

  organizationName: 'ask-ehds',
  projectName: 'ask-ehds-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ask-ehds/ask-ehds-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ask-ehds/ask-ehds-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/ask-ehds-social-card.jpg',
    navbar: {
      title: 'Ask-EHDS',
      logo: {
        alt: 'Ask-EHDS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Dokumentace',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ask-ehds/ask-ehds-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentace',
          items: [
            {
              label: 'Úvod do EHDS',
              to: '/docs/co_potrebujete_vedet_o_ehds',
            },
            {
              label: 'Podpora pokroku ve zdravotnictví',
              to: '/docs/podpora_pokroku_ve_zdravotnictvi',
            },
            {
              label: 'Technické aspekty EHDS',
              to: '/docs/technicke_aspekty_ehds',
            },
            {
              label: 'Bezpečnost a ochrana dat',
              to: '/docs/bezpecnost_a_ochrana_dat_v_ehds',
            },
            {
              label: 'Implementace v ČR',
              to: '/docs/implementace_ehds_v_cr',
            },
            {
              label: 'EHDS a české zdravotnictví',
              to: '/docs/ehds_a_ceske_zdravotnictvi',
            },
          ],
        },
        {
          title: 'Komunita',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/ask-ehds',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/ask-ehds',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ask_ehds',
            },
          ],
        },
        {
          title: 'Více',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ask-ehds/ask-ehds-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ask-EHDS Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;