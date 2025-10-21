<template>
  <NuxtLink :to="`/${story.full_slug}`" class="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg">
    <p class="text-xs uppercase tracking-wide text-teal-600">{{ formattedDate }}</p>
    <h3 class="mt-3 text-xl font-semibold text-slate-900 group-hover:text-teal-600">
      {{ story.content?.name || story.name }}
    </h3>
    <p v-if="story.content?.intro" class="mt-4 flex-1 text-sm text-slate-600">
      {{ story.content.intro }}
    </p>
    <span class="mt-6 inline-flex items-center text-sm font-semibold text-teal-600">
      Läs mer →
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ story: any }>()

const formattedDate = computed(() => {
  const publishedAt = props.story?.published_at
  if (!publishedAt) return ''
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(publishedAt))
})
</script>
