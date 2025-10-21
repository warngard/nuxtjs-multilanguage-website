<template>
  <ul v-editable="blok" class="mb-10 grid gap-8 py-8 md:grid-cols-3">
    <li v-for="column in blok.columns" :key="column._uid" class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
      <StoryblokComponent :blok="column" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { StoryblokComponent } from '@storyblok/vue'

defineProps<{ blok: any }>()
</script>
