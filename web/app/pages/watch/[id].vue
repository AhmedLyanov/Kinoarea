<script setup lang="ts">
import { MovieCover, MovieMetadata } from "@/widgets";
definePageMeta({
    layout: "movie",
});
const route = useRoute();
const movie = ref({
    title: "Побег из Претории",
});

useHead({
    title: computed(() => `${movie.value.title} | Kinoarea`),
});
const movieId = route.params.id;
</script>

<template>
    <div class="px-[143px]">
        <MovieCover />
        <MovieMetadata class="mt-[45px]"/>
    </div>
</template>
