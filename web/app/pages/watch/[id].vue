<script setup lang="ts">
import { getMovie } from "~/entities/movie/api/get-movie";
import {
    MovieCover,
    MovieMetadata,
    MovieTrailer,
    MovieFrames,
    MoviePlayer,
} from "~/widgets";



definePageMeta({
    layout: "movie",
});

const route = useRoute();

const movie = await getMovie(String(route.params.id));
</script>

<template>
    <div class="mx-auto max-w-[1430px]">
        <div class="px-[143px]">
            <MovieCover :movie="movie" />

            <MovieMetadata :movie="movie" />

        </div>
        <MovieTrailer :movie="movie" />
        <MovieFrames :movie="movie" />
        <MoviePlayer :movie="movie" />
    </div>
</template>