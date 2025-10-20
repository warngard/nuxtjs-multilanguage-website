<template>
  <div class="min-h-screen bg-slate-50">
    <SiteHeader />
    <main id="content" class="pb-20 pt-10">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '~/components/site/SiteHeader.vue'
import SiteFooter from '~/components/site/SiteFooter.vue'
</script>
