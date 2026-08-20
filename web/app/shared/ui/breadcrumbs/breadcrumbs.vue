<template>
  <nav aria-label="Хлебные крошки" class="flex items-center gap-3 text-[18px]">
    <NuxtLink
      to="/"
      class="text-(--breadcrumbs-nonactive) transition hover:text-white"
    >
      Главная
    </NuxtLink>

    <span class="text-(--breadcrumbs-nonactive)">›</span>

    <span class="text-white">
      {{ title }}
    </span>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>