<script setup lang="ts">
import { computed, ref } from "vue";
import { getNewMovies } from "~/entities/movie/api/get-movies";
import MovieCard from "~/entities/movie/ui/movie-card.vue";
import { Button, Typography } from "~/shared/ui";
import MovieCategories from "./movie-categories.vue";
import { movieCategories } from "../model/data";

const activeCategory = ref("Все");

const movies = await getNewMovies();

const visibleMovies = computed(() => movies.slice(0, 8));
</script>

<template>
    <section class="relative w-full py-12 md:py-16 lg:py-20">
        <div
            class="relative z-10 mx-auto max-w-[1430px] px-[29px] min-[760px]:px-[54px] xl:px-0"
        >
            <div
                class="relative mb-8 flex items-center justify-center gap-2 min-[760px]:mb-12 min-[760px]:flex-col min-[760px]:items-start min-[760px]:justify-start min-[760px]:gap-5 xl:mb-15.75 xl:flex-row xl:items-center xl:gap-14"
            >
                <div class="flex items-center gap-2">
                    <Typography variant="h1">
                        Сейчас в кино
                    </Typography>

                    <button
                        type="button"
                        class="flex items-center min-[760px]:hidden"
                    >
                        <Icon
                            name="lucide:menu"
                            class="size-5 min-[500px]:size-6"
                        />
                    </button>
                </div>

                <div
                    class="hidden h-[2px] w-10 shrink-0 bg-(--primary-white) xl:block"
                />

                <MovieCategories
                    :categories="movieCategories"
                    :active-category="activeCategory"
                    class="hidden min-[760px]:flex"
                    @update:active-category="activeCategory = $event"
                />
            </div>

            <div
                class="grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3 md:gap-x-5 md:gap-y-8 lg:grid-cols-4 lg:gap-x-[18px]"
            >
                <MovieCard
                    v-for="movie in visibleMovies"
                    :key="movie.id"
                    :movie="movie"
                />
            </div>

            <div class="mt-10 flex justify-center md:mt-12.75">
                <Button
                    variant="outline"
                    class="h-12 w-[140px] border-(--primary-white) text-(--primary-white) md:h-[58px] md:w-[160px]"
                >
                    Все новинки
                </Button>
            </div>
        </div>
    </section>
</template>