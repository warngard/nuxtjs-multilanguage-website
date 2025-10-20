import { defineI18nConfig } from '#i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: {
      navigation: {
        home: 'Home',
        blog: 'Insights'
      }
    },
    sv: {
      navigation: {
        home: 'Hem',
        blog: 'Insikter'
      }
    }
  }
}))
