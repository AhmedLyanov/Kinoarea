<script setup lang="ts">
import { Button, Typography } from "~/shared/ui";
import { MovieCard } from "~/entities/movie";
import MovieCategories from "./movie-categories.vue";
import type { Movie } from "~/entities/movie";

interface MoviesResponse {
    total: number;
    prev_page: string | null;
    next_page: string | null;
    results: Movie[];
}

const activeCategory = ref("Все");

const { data, pending, error } = await useFetch<MoviesResponse>(
    "/api/movies",
);

const movies = computed(() =>
    data.value?.results?.slice(0, 8) ?? [],
);
</script>
<template>
    <section class="relative w-full py-20">
        <div class="relative z-10 mx-auto max-w-[1430px]">
            <div class="mb-15.75 flex items-center gap-14">
                <Typography variant="h1">
                    Новые фильмы
                </Typography>

                <div
                    class="h-[2px] w-10 shrink-0 bg-(--primary-white)"
                />

                <MovieCategories
                    :categories="movieCategories"
                    :active-category="activeCategory"
                    @update:active-category="activeCategory = $event"
                />
            </div>

            <div
                v-if="pending"
                class="text-(--primary-white)"
            >
                Загрузка...
            </div>

            <div
                v-else-if="error"
                class="text-(--primary-white)"
            >
                Не удалось загрузить фильмы.
            </div>

            <div
                v-else
                class="grid grid-cols-4 gap-x-[18px] gap-y-8"
            >
                <MovieCard
                    v-for="movie in movies"
                    :key="movie.id"
                    :movie="movie"
                />
            </div>

            <div class="mt-12.75 flex justify-center">
                <Button
                    variant="outline"
                    class="h-[58px] w-[160px] border-(--primary-white) text-(--primary-white)"
                >
                    Все новинки
                </Button>
            </div>
        </div>
    </section>
</template>