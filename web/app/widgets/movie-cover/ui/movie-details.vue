<script setup lang="ts">
import { Breadcrumbs, Typography, Button, MovieRating } from "~/shared/ui";
import type { Movie } from "~/entities/movie";

defineProps<{
    movie: Movie;
}>();
</script>

<template>
    <Breadcrumbs :title="movie.title" />

    <div class="mt-6">
        <Typography variant="h1">
            {{ movie.title }}
        </Typography>

        <Typography variant="body" class="mt-1 text-[25px]">
            {{ movie.originalTitle }}
        </Typography>

        <div class="mt-4 flex items-center gap-[13px]">
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

        <div class="mt-7.5 flex items-center gap-9.25">
            <Button variant="outline" class="h-[71px]">
                <Icon name="lucide:play" class="size-9" />

                <Typography variant="body" class="pl-3 text-[18px]">
                    Смотреть трейлер
                </Typography>
            </Button>

            <div class="flex items-center gap-6">
                <Icon name="simple-icons:vk" class="size-5 text-white" />
                <Icon name="lucide:instagram" class="size-5 text-white" />
                <Icon name="lucide:facebook" class="size-5 text-white" />
                <Icon name="simple-icons:twitter" class="size-5 text-white" />
                <Icon name="lucide:more-horizontal" class="size-5 text-white" />
            </div>
        </div>
        <iframe
            :src="movie.iframeUrl"
            title="Видео плеер"
            frameborder="0"
            allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
            "
            allowfullscreen
        ></iframe>
    </div>
</template>
