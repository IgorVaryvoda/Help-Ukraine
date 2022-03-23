const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Help Ukraine',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#327bba' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'title', content: 'Help Ukrainian army and refugees. Stop Russian aggression.' }],
    ['meta', { property: 'og:image', content: 'https://cdn.earthroulette.com/help-ukraine/FMWRQvhXsAESunV.jpg?w=1280' }],
    ['link', { rel: 'icon', href: 'https://cdn.earthroulette.com/help-ukraine/Flag_of_Ukraine.svg' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'IgorVaryvoda/Help-Ukraine',
    search: false,
    logo: 'https://cdn.earthroulette.com/help-ukraine/Flag_of_Ukraine.svg',
    editLinks: true,
    docsBranch: 'main',
    docsDir: 'src',
    editLinkText: '',
    lastUpdated: false,
    locales: {
      '/': {
        label: 'English',
        nav: [
          {
            text: 'Help the army',
            link: '/help/#help-the-ukrainian-army',
          },
          {
            text: 'Help refugees',
            link: '/help/#help-ukrainian-refugees'
          },
          {
            text: 'Russian War Crimes',
            link: 'https://www.nurnberg2022.org/en'
          }
        ],
        sidebar: {
          '/help/': [
            {
              title: 'Help',
              collapsable: false,
              children: [
                'help-ukrainian-refugees',
                'help-the-ukrainian-army',
              ]
            }
          ],
        }
      },
      '/ua/': {
        editLinkText: 'Редагувати сторінку',
        selectText: 'Мова',
        label: 'Українська',
        nav: [
          {
            text: 'Допомога ЗСУ',
            link: '/ua/help/#допомогти-зсу',
          },
          {
            text: 'Допомога біженцям',
            link: '/ua/help/#допомога-біженцям'
          },
          {
            text: 'Воєнні злочини Росії',
            link: 'https://www.nurnberg2022.org/en'
          }
        ]
      },
      '/sr/': {
        editLinkText: 'Уреди страницу',
        selectText: 'Језик',
        label: 'Српски',
        nav: [
          {
            text: 'Помозите војсци',
            link: '/sr/help/#помозите-војсци',
          },
          {
            text: 'Помоћ за избеглице',
            link: '/sr/help/#помоћ-избеглицама'
          },
          {
            text: 'Ратни злочини Русије',
            link: 'https://www.nurnberg2022.org/en'
          }
        ]
      },
      '/pl/': {
        editLinkText: 'Edytuj stronę',
        selectText: 'Język',
        label: 'Polski',
        nav: [
          {
            text: 'Pomóż armii ukraińskiej',
            link: '/pl/help/#kody-qr-do-szybkiej-darowizny',
          },
          {
            text: 'Pomóż uchodźcom',
            link: '/pl/help/#pomoz-ukrainskim-uchodzcom'
          },
          {
            text: 'Rosyjskie zbrodnie wojenne',
            link: 'https://www.nurnberg2022.org/en'
          }
        ]
      }
    }
  },
  locales: {
    '/': {
      lang:'en-US',
    },
    '/ua/': {
      lang:'uk',
      title: 'Допоможи Україні'
    },
    '/pl/': {
      lang:'pl',
      title: 'Pomóż Ukrainie'
    },
    '/sr/': {
      lang:'sr',
      title: 'Помозите Украјини'
    }
    },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['google-gtag', {'ga': 'G-6VBBEXGS2Z'}]
  ]
}
