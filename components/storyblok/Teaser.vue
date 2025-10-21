<template>
  <div v-editable="blok" class="mb-6 pb-8 text-center">
    <img v-if="blok.image?.filename" :src="blok.image.filename" :alt="blok.image.alt || blok.headline" class="mb-4 h-48 w-full rounded-2xl object-cover" />
    <h1 class="text-4xl font-bold md:text-5xl">{{ blok.headline }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ blok: any }>()
</script>
