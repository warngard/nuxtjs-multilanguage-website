<template>
  <article v-editable="blok" class="flex flex-col items-center text-center">
    <img v-if="blok.icon" :src="blok.icon" :alt="blok.name" class="mb-4 h-16 w-16" />
    <h3 class="mb-2 text-lg font-semibold text-slate-900">{{ blok.name }}</h3>
    <p class="text-sm text-slate-600">{{ blok.description }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{ blok: any }>()
</script>
