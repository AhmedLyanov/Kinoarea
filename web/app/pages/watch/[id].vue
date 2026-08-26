<script setup lang="ts">
import { getMovie } from "~/entities/movie/api/get-movie";
import MovieCover from "~/widgets/movie-cover/movie-cover.vue";
definePageMeta({
    layout: "movie",
});
const route = useRoute();

const movie = await getMovie(String(route.params.id));
</script>

<template>
    <div class="mx-auto max-w-[1430px]">
        <MovieCover :movie="movie" />
    </div>
</template>