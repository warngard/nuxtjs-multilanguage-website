<template>
  <section v-editable="blok" class="mx-auto w-full max-w-5xl px-6 py-12">
    <StoryblokComponent
      v-for="nested in blok.body"
      :blok="nested"
      :key="nested._uid"
    />
  </section>
</template>

<script setup lang="ts">
import { StoryblokComponent } from '@storyblok/vue'

defineProps<{ blok: any }>()
</script>
