<script setup lang="ts">
import { computed, ref } from "vue";

import { getPopularMovies } from "~/entities/movie/api/get-movies";
import MovieCard from "~/entities/movie/ui/movie-card.vue";
import { Typography, Carousel } from "~/shared/ui";

const currentPage = ref(1);

const movies = await getPopularMovies();

const moviesPerPage = 4;

const totalPages = computed(() =>
    Math.max(
        1,
        Math.ceil(movies.length / moviesPerPage),
    ),
);

const visibleMovies = computed(() => {
    const start = (currentPage.value - 1) * moviesPerPage;

    return movies.slice(
        start,
        start + moviesPerPage,
    );
});

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};
</script>

<template>
    <section
        class="relative z-10 mx-auto mt-18.75 max-w-[1430px]"
    >
        <div class="mb-6 flex items-center justify-between">
            <div class="flex items-center gap-14">
                <Typography variant="h1">
                    Популярные фильмы
                </Typography>

                <div
                    class="h-[2px] w-10 shrink-0 bg-(--primary-white)"
                />
            </div>
        </div>

        <Carousel
            :current-page="currentPage"
            :total-pages="totalPages"
            controls-position="center"
            @prev="prevPage"
            @next="nextPage"
        >
            <div
                class="mt-15.75 grid grid-cols-4  gap-5.5"
            >
                <MovieCard
                    v-for="movie in visibleMovies"
                    :key="movie.id"
                    :movie="movie"
                />
            </div>
        </Carousel>
    </section>
</template>