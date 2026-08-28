<script setup lang="ts">
import { Typography } from "~/shared/ui";
import type { MovieSearchResult } from "~/entities/movie";
import { useSearchStore } from "~/stores/search";

const searchStore = useSearchStore();

const props = defineProps<{
    movie: MovieSearchResult;
}>();

const genres = computed(() => {
    if (!props.movie.genres.length) {
        return "Жанр не указан";
    }

    return props.movie.genres.join(", ");
});

const rating = computed(() => {
    return props.movie.rating.kinopoisk;
});

const ratingClass = computed(() => {
    if (rating.value === null) {
        return "bg-(--search-rating-neutral)";
    }

    if (rating.value >= 7) {
        return "bg-(--search-rating-good)";
    }

    if (rating.value >= 5) {
        return "bg-(--search-rating-average)";
    }

    return "bg-(--search-rating-bad)";
});

const openMovie = () => {
    searchStore.close();
};
</script>
<template>
    <NuxtLink
:to="`/watch/${movie.kinopoiskId}`" class="
        group
        flex
        h-[175px]
        w-full
        items-center
        gap-6
        rounded-[13px]
        bg-(--search-card-bg)
        px-3
        transition-transform
        duration-200
        hover:scale-[1.005]
    " @click="openMovie">
        <div
class="
                h-[138px]
                w-[100px]
                shrink-0
                overflow-hidden
                rounded-[6px]
            ">
            <img
v-if="movie.poster" :src="movie.poster" :alt="movie.title" class="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                " >
        </div>

        <div class="min-w-0 flex-1">
            <Typography
variant="h3" class="
                    truncate
                    text-[27px]
                    font-bold
                    leading-none
                    text-(--search-card-title)
                ">
                {{ movie.title }}
            </Typography>

            <Typography
variant="body" class="
                    mt-3
                    truncate
                    text-[19px]
                    font-medium
                    leading-none
                    text-(--search-card-original-title)
                ">
                {{ movie.originalTitle || "Оригинальное название не указано" }}
            </Typography>

            <Typography
variant="body" class="
                    mt-4
                    truncate
                    whitespace-nowrap
                    text-[17px]
                    font-medium
                    leading-none
                    text-(--primary-yellow)
                ">
                {{ genres }}
            </Typography>
        </div>

        <div
class="
                mr-9
                flex
                h-[42px]
                min-w-[81px]
                shrink-0
                items-center
                justify-center
                rounded-[6px]
                px-3
            " :class="ratingClass">
            <Typography
variant="body" class="
                    text-[23px]
                    font-bold
                    leading-none
                    text-(--search-rating-text)
                ">
                {{ rating !== null ? rating.toFixed(2) : "—" }}
            </Typography>
        </div>
    </NuxtLink>
</template>