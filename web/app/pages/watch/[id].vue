<script setup lang="ts">
import { getMovie } from "~/entities/movie/api/get-movie";

const route = useRoute();

const movieId = String(route.params.id);

const movie = await getMovie(movieId);

console.log("MOVIE:", movie);
</script>

<template>
    <pre>{{ movie }}</pre>
</template>