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
        :to="`/watch/${movie.kinopoiskId}`"
        class="
            flex
            h-[125px]
            w-full
            items-center
            gap-3
            rounded-[10px]
            bg-(--search-card-bg)
            px-2

            md:h-[175px]
            md:gap-6
            md:rounded-[13px]
            md:px-3
        "
        @click="openMovie"
    >
        <div
            class="
                h-[109px]
                w-[75px]
                shrink-0
                overflow-hidden
                rounded-[6px]

                md:h-[138px]
                md:w-[100px]
            "
        >
            <img
                v-if="movie.poster"
                :src="movie.poster"
                :alt="movie.title"
                class="
                    h-full
                    w-full
                    object-cover
                "
            >
        </div>

        <div class="min-w-0 flex-1">
            <Typography
                variant="h3"
                class="
                    truncate
                    text-[18px]
                    font-bold
                    leading-none
                    text-(--search-card-title)

                    md:text-[27px]
                "
            >
                {{ movie.title }}
            </Typography>

            <Typography
                variant="body"
                class="
                    mt-2
                    truncate
                    text-[14px]
                    font-medium
                    leading-none
                    text-(--search-card-original-title)

                    md:mt-3
                    md:text-[19px]
                "
            >
                {{ movie.originalTitle || "Оригинальное название не указано" }}
            </Typography>

            <Typography
                variant="body"
                class="
                    mt-3
                    truncate
                    whitespace-nowrap
                    text-[13px]
                    font-medium
                    leading-none
                    text-(--primary-yellow)

                    md:mt-4
                    md:text-[17px]
                "
            >
                {{ genres }}
            </Typography>
        </div>

        <div
            class="
                mr-1
                flex
                h-[34px]
                min-w-[58px]
                shrink-0
                items-center
                justify-center
                rounded-[6px]
                px-2

                md:mr-9
                md:h-[42px]
                md:min-w-[81px]
                md:px-3
            "
            :class="ratingClass"
        >
            <Typography
                variant="body"
                class="
                    text-[16px]
                    font-bold
                    leading-none
                    text-(--search-rating-text)

                    md:text-[23px]
                "
            >
                {{ rating !== null ? rating.toFixed(2) : "—" }}
            </Typography>
        </div>
    </NuxtLink>
</template>