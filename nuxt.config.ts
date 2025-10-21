import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@storyblok/nuxt', 'nuxt-gtm'],
  runtimeConfig: {
    storyblokPreview: process.env.NUXT_STORYBLOK_PREVIEW || 'draft',
    storyblokRegion: process.env.NUXT_STORYBLOK_REGION || 'eu',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      storyblokToken: process.env.NUXT_PUBLIC_STORYBLOK_TOKEN || '',
      gtmId: process.env.NUXT_PUBLIC_GTM_ID || ''
    }
  },
  app: {
    head: {
      titleTemplate: '%s · Codex Demo',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'A multilanguage marketing site powered by Nuxt 3 and Storyblok.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
  gtm: {
    id: process.env.NUXT_PUBLIC_GTM_ID || '',
    defer: true,
    enabled: true
  },
  storyblok: {
    accessToken: process.env.NUXT_PUBLIC_STORYBLOK_TOKEN,
    bridge: true,
    useApiClient: true,
    apiOptions: {
      region: (process.env.NUXT_STORYBLOK_REGION || 'eu') as 'us' | 'eu'
    }
  },
  tailwindcss: {
    exposeConfig: false
  },
  i18n: {
    defaultLocale: 'sv',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      { code: 'sv', name: 'Svenska', file: 'sv.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    lazy: true,
    langDir: 'locales',
    vueI18n: './i18n.config.ts'
  }
})
