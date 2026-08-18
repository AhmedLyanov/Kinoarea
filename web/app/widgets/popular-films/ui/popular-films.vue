<script setup lang="ts">
import { ref, computed } from "vue";

import { Typography, Carousel } from "~/shared/ui";
import MovieCard from "~/entities/movie/ui/movie-card.vue";

import FilterYear from "./popular-all-time.vue";
import { movies, popularityYears } from "../model/data";

const activeYear = ref("All Time");
const currentPage = ref(1);

const filteredMovies = computed(() => {
    if (activeYear.value === "All Time") {
        return movies;
    }

    const year = parseInt(activeYear.value);

    return movies.filter((movie) => movie.year === year);
});

const moviesPerPage = 4;

const totalPages = computed(() =>
    Math.max(1, Math.ceil(filteredMovies.value.length / moviesPerPage)),
);

const visibleMovies = computed(() => {
    const start = (currentPage.value - 1) * moviesPerPage;

    return filteredMovies.value.slice(
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

const changeYear = (year: string) => {
    activeYear.value = year;
    currentPage.value = 1;
};
</script>

<template>
    <section class="relative z-10 mx-auto mt-18.75 max-w-[1430px]">
        <div class="mb-6 flex items-center justify-between">
            <Typography variant="h1">
                Популярные фильмы
            </Typography>

            <div
                class="h-[2px] w-10 shrink-0 bg-(--primary-white)"
            />

            <FilterYear
                :years="popularityYears"
                :active-year="activeYear"
                @update:active-year="changeYear"
            />
        </div>

        <Carousel
            :current-page="currentPage"
            :total-pages="totalPages"
            controls-position="center"
            @prev="prevPage"
            @next="nextPage"
        >
            <div class="mt-15.75 grid grid-cols-4 gap-5.5">
                <MovieCard
                    v-for="movie in visibleMovies"
                    :key="movie.id"
                    :movie="movie"
                />
            </div>
        </Carousel>
    </section>
</template>