<script setup lang="ts">
import { Header, MovieCover, Footer } from "@/widgets";

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
    <Header/>
    <div>
        <MovieCover />
    </div>
    <Footer/>
</template>
