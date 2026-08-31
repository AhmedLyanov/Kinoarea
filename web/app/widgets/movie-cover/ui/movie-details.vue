<script setup lang="ts">
import {
    Breadcrumbs,
    Typography,
    Button,
    MovieRating,
    ExpandableText,
} from "~/shared/ui";

import type { Movie } from "~/entities/movie";

defineProps<{
    movie: Movie;
}>();
</script>

<template>
    <div class="w-full min-w-0">
        <Breadcrumbs :title="movie.title" />

        <div class="mt-6">
            <Typography
                variant="h1"
                class="break-words text-[32px] leading-[125%] lg:text-[40px]"
            >
                {{ movie.title }}
            </Typography>
            <Typography
                v-if="movie.originalTitle"
                variant="body"
                class="mt-1 break-words text-[20px] leading-[140%] lg:text-[25px]"
            >
                {{ movie.originalTitle }}
            </Typography>
            <div class="mt-4 flex flex-wrap items-center gap-3 lg:gap-[13px]">
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
            <div
                class="mt-6 w-full max-w-[520px] text-white lg:mt-7.5 lg:max-w-[650px]"
            >
                <ExpandableText :lines="3">
                    <Typography
                        variant="body"
                        class="text-[18px] leading-[160%] lg:text-[20px] lg:leading-[167%]"
                    >
                        {{ movie.description }}
                    </Typography>
                </ExpandableText>
            </div>
            <div
                class="mt-6 flex flex-wrap items-center gap-6 lg:mt-7.5 lg:gap-9.25"
            >
                <Button
                    v-if="movie.trailerUrl"
                    variant="outline"
                    class="h-[60px] shrink-0 px-5 lg:h-[71px]"
                >
                    <Icon name="lucide:play" class="size-7 lg:size-9" />

                    <Typography
                        variant="body"
                        class="pl-2 text-[16px] lg:pl-3 lg:text-[18px]"
                    >
                        Смотреть трейлер
                    </Typography>
                </Button>

                <div class="flex items-center gap-4 lg:gap-6">
                    <Icon name="simple-icons:vk" class="size-5 text-white" />

                    <Icon name="lucide:instagram" class="size-5 text-white" />

                    <Icon name="lucide:facebook" class="size-5 text-white" />

                    <Icon
                        name="simple-icons:twitter"
                        class="size-5 text-white"
                    />

                    <Icon
                        name="lucide:more-horizontal"
                        class="size-5 text-white"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
