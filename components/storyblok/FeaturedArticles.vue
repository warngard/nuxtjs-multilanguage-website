<template>
  <section v-editable="blok" class="space-y-6">
    <header class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold text-slate-900">{{ blok.title }}</h2>
      <NuxtLink v-if="blok.ctaLink" :to="blok.ctaLink" class="text-sm font-semibold text-teal-600 hover:underline">
        {{ blok.ctaLabel || 'Alla artiklar' }}
      </NuxtLink>
    </header>
    <div class="grid gap-6 md:grid-cols-3">
      <ArticleTeaser
        v-for="article in articles"
        :key="article.uuid || article._uid"
        :story="article"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ArticleTeaser from '~/components/storyblok/ArticleTeaser.vue'

const props = defineProps<{ blok: any }>()

const articles = computed(() => {
  if (!props.blok?.articles) {
    return []
  }
  return props.blok.articles
    .map((article: any) => (article?.content ? article : null))
    .filter((article: any) => Boolean(article))
})
</script>
