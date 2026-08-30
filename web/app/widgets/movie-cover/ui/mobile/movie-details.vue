<script setup lang="ts">
import {
    Breadcrumbs,
    Typography,
    Button,
    MovieRating,
} from "~/shared/ui";

import type { Movie } from "~/entities/movie";
import Poster from "../poster.vue";

defineProps<{
    movie: Movie;
}>();
</script>

<template>
    <div class="w-full">
        <Breadcrumbs :title="movie.title" />
        <div class="mt-5">
            <Typography
                variant="h1"
                class="text-[24px] leading-[125%]"
            >
                {{ movie.title }}
            </Typography>

            <Typography
                v-if="movie.originalTitle"
                variant="body"
                class="mt-1 text-[15px] leading-[140%]"
            >
                {{ movie.originalTitle }}
            </Typography>
        </div>
        <div class="mt-6 flex items-start gap-5">
            <Poster
                :src="movie.poster"
                :alt="movie.title"
            />

            <div class="flex flex-col gap-4">
                <MovieRating
                    v-if="movie.rating.kinopoisk !== null"
                    :value="movie.rating.kinopoisk"
                    label="Kinoarea"
                />

                <MovieRating
                    v-if="movie.rating.imdb !== null"
                    :value="movie.rating.imdb"
                    label="IMDb"
                />
            </div>
        </div>
        <div class="mt-6 w-full">
            <Typography
                variant="body"
                class="line-clamp-3 text-[16px] leading-[160%] text-white"
            >
                {{ movie.description }}
            </Typography>
        </div>
        <div class="mt-6 grid justify-center justify-items-center gap-4">
            <Button
                v-if="movie.trailerUrl"
                variant="outline"
                class="h-[48px] shrink-0 px-4"
            >
                <Icon
                    name="lucide:play"
                    class="size-5"
                />

                <Typography
                    variant="body"
                    class="pl-2 text-[14px]"
                >
                    Смотреть трейлер
                </Typography>
            </Button>

            <div class="flex items-center gap-3">
                <Icon
                    name="simple-icons:vk"
                    class="size-4 text-white"
                />

                <Icon
                    name="lucide:instagram"
                    class="size-4 text-white"
                />

                <Icon
                    name="lucide:facebook"
                    class="size-4 text-white"
                />

                <Icon
                    name="simple-icons:twitter"
                    class="size-4 text-white"
                />

                <Icon
                    name="lucide:more-horizontal"
                    class="size-4 text-white"
                />
            </div>
        </div>
    </div>
</template>