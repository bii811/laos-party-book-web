import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Laos Party Book",
  description: "Website for Laos Party Book",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Book', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Laos Party Book',
        items: [
          { text: 'Intro', link: '/intro' },
          { text: 'Chapter 1', link: '/chapter1' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
