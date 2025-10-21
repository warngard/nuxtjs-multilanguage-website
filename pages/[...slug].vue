<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
    <section v-else class="mx-auto max-w-3xl px-6 py-20 text-center">
      <p class="text-sm uppercase tracking-wide text-slate-500">404</p>
      <h1 class="mt-4 text-3xl font-semibold text-slate-900">Sidan kunde inte hittas</h1>
      <p class="mt-3 text-slate-600">Vi hittade tyvärr ingen motsvarande Storyblok-sida för denna adress.</p>
      <NuxtLink :to="localePath('/')" class="mt-8 inline-flex items-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-500">Till startsidan</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { StoryblokComponent, useStoryblokBridge } from '@storyblok/vue'
import { computed, ref, watch, onMounted } from 'vue'

const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()
const config = useRuntimeConfig()
const storyblokApi = useStoryblokApi()

const story = ref<any>(null)
const bridgeLoaded = ref(false)

const slug = computed(() => {
  const raw = route.params.slug
  if (!raw) {
    return 'home'
  }
  if (Array.isArray(raw)) {
    return raw.join('/')
  }
  return raw
})

const version = computed(() => {
  if (config.storyblokPreview === 'published') {
    return 'published'
  }
  return import.meta.dev ? 'draft' : 'published'
})

const fetchStory = async () => {
  try {
    const response = await storyblokApi.get(`cdn/stories/${slug.value}`, {
      version: version.value,
      language: locale.value,
      resolve_relations: 'featured-articles.articles',
      resolve_links: 'story'
    })
    story.value = response.data.story
    applySeo()
    if (import.meta.client && story.value && !bridgeLoaded.value) {
      useStoryblokBridge(story.value.id, (evStory) => {
        story.value = evStory.story
        applySeo()
      })
      bridgeLoaded.value = true
    }
  } catch (err) {
    console.error('Storyblok error', err)
    story.value = null
  }
}

const applySeo = () => {
  const current = story.value
  if (!current) {
    return
  }
  const content = current.content || {}
  const metaTitle = content.seo_title || content.seo?.title || current.name
  const metaDescription = content.seo_description || content.seo?.description || content.intro || ''
  const image = content.seo_image?.filename || content.image?.filename || ''
  const canonicalUrl = `${config.public.siteUrl.replace(/\/$/, '')}/${current.full_slug}`

  useSeoMeta({
    title: metaTitle,
    description: metaDescription,
    ogTitle: metaTitle,
    ogDescription: metaDescription,
    ogImage: image || undefined,
    ogUrl: canonicalUrl,
    twitterTitle: metaTitle,
    twitterDescription: metaDescription,
    twitterImage: image || undefined,
    twitterCard: image ? 'summary_large_image' : 'summary'
  })

  useHead({
    htmlAttrs: { lang: locale.value },
    link: [{ rel: 'canonical', href: canonicalUrl }]
  })
}

await fetchStory()

watch([slug, locale], () => {
  fetchStory()
})

onMounted(() => {
  applySeo()
})
</script>
