<template>
  <header class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8 text-slate-900">
    <nav aria-label="Main navigation" class="order-2 flex flex-1 justify-start md:order-1">
      <ul class="flex items-center gap-6 text-sm font-medium uppercase tracking-wide">
        <li>
          <NuxtLink :to="localePath('/')" class="transition hover:text-teal-600">
            {{ t('navigation.home') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/articles')" class="transition hover:text-teal-600">
            {{ t('navigation.blog') }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="order-1 flex w-full items-center justify-center md:order-2 md:w-auto">
      <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-3 text-xl font-semibold">
        <img alt="Codex logo" class="h-10 w-auto" src="/logo.svg" />
        <span>Codex Studio</span>
      </NuxtLink>
    </div>

    <nav aria-label="Language switcher" class="order-3 flex flex-1 justify-end">
      <ul class="flex items-center gap-3 text-sm">
        <li v-for="item in otherLocales" :key="item.code">
          <NuxtLink :to="switchLocalePath(item.code)" class="rounded-full border border-slate-300 px-3 py-1 transition hover:border-teal-500 hover:text-teal-600">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const otherLocales = computed(() => locales.value.filter((item) => item.code !== locale.value))
</script>
