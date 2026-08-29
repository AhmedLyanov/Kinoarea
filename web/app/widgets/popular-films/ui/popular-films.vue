<script setup lang="ts">

import { computed, onMounted, onUnmounted, ref } from "vue";

import { getPopularMovies } from "~/entities/movie/api/get-movies";

import MovieCard from "~/entities/movie/ui/movie-card.vue";

import { Carousel, Typography } from "~/shared/ui";

const currentPage = ref(1);
const screenWidth = ref(0);

const movies = await getPopularMovies();

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
            movies.length / moviesPerPage.value,
        ),
    ),
);

const visibleMovies = computed(() => {
    const start =
        (currentPage.value - 1) *
        moviesPerPage.value;

    return movies.slice(
        start,
        start + moviesPerPage.value,
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
            relative
            z-10
            mx-auto
            mt-12
            w-full
            max-w-[1430px]
            px-[29px]
            min-[760px]:mt-16
            min-[760px]:px-[54px]
            xl:mt-18.75
            xl:px-0
        "
    >

        <div
            class="
                mb-6
                flex
                items-center
                justify-center
                gap-2
                min-[760px]:mb-8
                min-[760px]:justify-start
                min-[760px]:gap-0
                xl:mb-6
                xl:gap-14
            "
        >

            <Typography variant="h1">
                Популярные фильмы
            </Typography>

            <div
                class="
                    hidden
                    h-[2px]
                    w-10
                    shrink-0
                    bg-(--primary-white)
                    xl:block
                "
            />

            <button
                type="button"
                class="
                    flex
                    shrink-0
                    items-center
                    min-[760px]:hidden
                "
            >
                <Icon
                    name="lucide:menu"
                    class="size-6 text-(--primary-white)"
                />
            </button>

        </div>

        <Carousel
            :current-page="currentPage"
            :total-pages="totalPages"
            controls-position="center"
            @prev="prevPage"
            @next="nextPage"
        >

            <div
                class="
                    mt-0
                    grid
                    grid-cols-2
                    gap-x-3.5
                    gap-y-7
                    min-[760px]:mt-4
                    min-[760px]:grid-cols-3
                    min-[760px]:gap-x-5
                    min-[760px]:gap-y-8
                    xl:mt-15.75
                    xl:grid-cols-4
                    xl:gap-5.5
                "
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