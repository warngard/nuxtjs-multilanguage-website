<template>
  <article v-editable="blok" class="prose prose-lg mx-auto my-16 max-w-3xl prose-headings:text-slate-900 prose-p:text-slate-700">
    <header class="mb-10 border-b border-slate-200 pb-6">
      <p class="text-sm uppercase tracking-wide text-teal-600">{{ formattedDate }}</p>
      <h1 class="mt-2 text-4xl font-bold">{{ blok.name }}</h1>
      <p v-if="blok.intro" class="mt-4 text-lg text-slate-600">{{ blok.intro }}</p>
    </header>
    <div v-if="richText" v-html="richText"></div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { renderRichText } from '@storyblok/vue'

const props = defineProps<{ blok: any }>()

const richText = computed(() => (props.blok?.body ? renderRichText(props.blok.body) : ''))

const formattedDate = computed(() => {
  if (!props.blok?.published_at) {
    return ''
  }
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(props.blok.published_at))
})
</script>
