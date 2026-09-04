<script setup lang="ts">
import {
    computed,
    onMounted,
    onUnmounted,
    ref,
} from "vue";

import { getNewMovies } from "~/entities/movie/api/get-movies";
import MovieCard from "~/entities/movie/ui/movie-card.vue";
import { Carousel, Typography } from "~/shared/ui";

const currentPage = ref(1);
const screenWidth = ref(0);

const movies = await getNewMovies();

const moviesPerPage = computed(() => {
    if (screenWidth.value >= 1280) {
        return 4;
    }

    if (screenWidth.value >= 760) {
        return 3;
    }

    return 2;
});

const totalPages = computed(() =>
    Math.max(
        1,
        Math.ceil(
            movies.length /
                moviesPerPage.value,
        ),
    ),
);

const pages = computed(() => {
    const result = [];

    for (
        let index = 0;
        index < movies.length;
        index += moviesPerPage.value
    ) {
        result.push(
            movies.slice(
                index,
                index + moviesPerPage.value,
            ),
        );
    }

    return result;
});

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (
        currentPage.value <
        totalPages.value
    ) {
        currentPage.value++;
    }
};

const handleResize = () => {
    const previousMoviesPerPage =
        moviesPerPage.value;

    screenWidth.value = window.innerWidth;

    if (
        previousMoviesPerPage !==
        moviesPerPage.value
    ) {
        currentPage.value = 1;
    }
};

onMounted(() => {
    screenWidth.value = window.innerWidth;

    window.addEventListener(
        "resize",
        handleResize,
    );
});

onUnmounted(() => {
    window.removeEventListener(
        "resize",
        handleResize,
    );
});
</script>

<template>
    <section
        class="
            px-[245px]
            py-[49px]
        "
    >
        <Carousel
            :current-page="currentPage"
            :total-pages="totalPages"
            controls-position="right"
            controls-placement="top"
            @prev="prevPage"
            @next="nextPage"
        >
            <template #header>
                <Typography
                    variant="h1"
                >
                    Ожидаемые новинки
                </Typography>
            </template>

            <div
                v-for="(page, index) in pages"
                :key="index"
                class="
                    basis-full
                    shrink-0
                    snap-start
                    min-w-0
                "
            >
                <div
                    class="
                        grid
                        grid-cols-2
                        gap-x-3.5
                        gap-y-7
                        min-[760px]:grid-cols-3
                        min-[760px]:gap-x-5
                        min-[760px]:gap-y-8
                        xl:grid-cols-4
                        xl:gap-5.5
                    "
                >
                    <MovieCard
                        v-for="movie in page"
                        :key="movie.id"
                        :movie="movie"
                    />
                </div>
            </div>
        </Carousel>
    </section>
</template>