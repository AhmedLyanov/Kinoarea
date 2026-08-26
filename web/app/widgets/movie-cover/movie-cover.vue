<script setup lang="ts">
import { getMovie } from "~/entities/movie/api/get-movie";
import MovieCover from "~/widgets/movie-cover/movie-cover.vue";

const route = useRoute();

const movie = await getMovie(String(route.params.id));
</script>

<template>
    <main class="mx-auto max-w-[1430px] py-20">
        <MovieCover :movie="movie" />
    </main>
</template>