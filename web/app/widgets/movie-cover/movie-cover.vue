<script setup lang="ts">
import type { Movie } from "~/entities/movie";

import Poster from "./ui/poster.vue";
import MovieDetails from "./ui/movie-details.vue";
import MobileMovieDetails from "./ui/mobile/movie-details.vue";

defineProps<{
    movie: Movie;
}>();
</script>

<template>
    <section class="w-full">
        <div
            class="
                hidden
                items-start
                justify-center
                gap-6
                md:flex
                lg:gap-11.5
            "
        >
            <Poster
                :src="movie.poster"
                :alt="movie.title"
            />

            <div
                class="
                    min-w-0
                    flex-1
                    pt-2
                    lg:pt-7.75
                "
            >
                <MovieDetails :movie="movie" />
            </div>
        </div>

        <div class="md:hidden">
            <MobileMovieDetails :movie="movie" />
        </div>
    </section>
</template>