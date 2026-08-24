<script setup lang="ts">
import { MovieCover, MovieMetadata } from "~/widgets";
import type { Movie } from "~/entities/movie";

definePageMeta({
    layout: "movie",
});

const route = useRoute();

const {
    data: movie,
    pending,
    error,
} = await useFetch<Movie>(
    `/api/movie/${route.params.id}`,
);

useHead({
    title: computed(() =>
        movie.value
            ? `${movie.value.title} | Kinoarea`
            : "Kinoarea",
    ),
});
</script>

<template>
    <div class="px-[143px]">
        <div
            v-if="pending"
            class="text-(--primary-white)"
        >
            Загрузка...
        </div>

        <div
            v-else-if="error || !movie"
            class="text-(--primary-white)"
        >
            Фильм не найден.
        </div>

        <template v-else>
            <MovieCover :movie="movie" />

            <MovieMetadata
                :movie="movie"
                class="mt-[45px]"
            />
        </template>
    </div>
</template>