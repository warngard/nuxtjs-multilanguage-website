import { defineNuxtPlugin } from '#app'

import Article from '~/components/storyblok/Article.vue'
import ArticleTeaser from '~/components/storyblok/ArticleTeaser.vue'
import Feature from '~/components/storyblok/Feature.vue'
import FeaturedArticles from '~/components/storyblok/FeaturedArticles.vue'
import Grid from '~/components/storyblok/Grid.vue'
import Page from '~/components/storyblok/Page.vue'
import Teaser from '~/components/storyblok/Teaser.vue'

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp
  const components = {
    article: Article,
    'article-teaser': ArticleTeaser,
    feature: Feature,
    'featured-articles': FeaturedArticles,
    grid: Grid,
    page: Page,
    teaser: Teaser
  }

  Object.entries(components).forEach(([name, component]) => {
    vueApp.component(name, component)
  })
})
