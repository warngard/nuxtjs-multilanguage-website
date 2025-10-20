<template>
  <footer class="border-t border-slate-200 bg-white">
    <div class="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {{ currentYear }} Codex Studio. {{ t('footer.copyright') }}.
      </p>
      <nav aria-label="Meta navigation">
        <ul class="flex items-center gap-4">
          <li>
            <NuxtLink class="transition hover:text-teal-600" to="/privacy">Privacy</NuxtLink>
          </li>
          <li>
            <NuxtLink class="transition hover:text-teal-600" to="/cookies">Cookies</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>
