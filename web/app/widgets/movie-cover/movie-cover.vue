<script setup lang="ts">
import type { Movie } from "~/entities/movie";

import Poster from "./ui/poster.vue";
import MovieDetails from "./ui/movie-details.vue";

defineProps<{
    movie: Movie;
}>();
</script>

<template>
    <section class="flex justify-center gap-11.5 ">
        <Poster
            :src="movie.poster"
            :alt="movie.title"
        />

        <div class="pt-7.75">
            <MovieDetails :movie="movie" />
        </div>
    </section>
</template>