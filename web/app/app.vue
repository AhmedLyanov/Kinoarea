<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <Search v-if="searchStore.isOpen" />

</template>
<script setup lang="ts">
import { Search } from "~/features";
import { useSearchStore } from "~/stores/search";

const searchStore = useSearchStore();

useHead({
    title: "Kinoarea",
});
</script>
