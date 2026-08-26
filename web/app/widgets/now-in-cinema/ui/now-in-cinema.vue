<script setup lang="ts">
import { ref } from "vue";

import { Button, Typography } from "~/shared/ui";
import MovieCard from "~/entities/movie/ui/movie-card.vue";

import MovieCategories from "./movie-categories.vue";
import { movieCategories } from "../model/data";

const activeCategory = ref("Все");

const movies = [
    {
        id: 1,
        title: "Мортал Комбат 2",
        image: "https://example.com/mortal-kombat-2.jpg",
        rating: {
            imdb: 6.2,
        },
        genres: ["Фэнтези", "Боевик"],
    },
    {
        id: 2,
        title: "Мятеж",
        image: "https://example.com/mutiny.jpg",
        rating: {
            imdb: 5.7,
        },
        genres: ["Боевик", "Криминал"],
    },
];
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

            <div class="grid grid-cols-4 gap-x-[18px] gap-y-8">
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