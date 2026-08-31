<script setup lang="ts">
import { Typography } from "~/shared/ui";
import type { Movie } from "../model/types";

defineProps<{
    movie: Movie;
}>();

const getRatingStyle = (rating: number | null) => {
    if (rating === null) return { backgroundColor: "var(--rating-green)" };
    
    const percentage = Math.min(Math.max(rating / 10, 0), 1);
    const hue = percentage * 120;
    
    return {
        backgroundColor: `hsl(${hue}, 70%, 50%)`
    };
};
</script>

<template>
    <article class="group">
        <NuxtLink :to="`/watch/${movie.ids.kinopoisk ?? movie.id}`">
            <div class="relative overflow-hidden rounded-[6px]">
                <img
                    :src="movie.poster"
                    :alt="movie.title"
                    class="
                        aspect-[271/370]
                        w-full
                        object-cover
                        transition-transform
                        duration-300
                        group-hover:scale-105
                    "
                >

                <span
                    v-if="
                        movie.rating.imdb !== null ||
                        movie.rating.kinopoisk !== null
                    "
                    class="
                        absolute
                        right-2
                        top-2
                        rounded-[6px]
                        px-3
                        py-1.5
                        text-[14px]
                        font-bold
                        text-white
                    "
                    :style="getRatingStyle(movie.rating.imdb ?? movie.rating.kinopoisk)"
                >
                    {{ movie.rating.imdb ?? movie.rating.kinopoisk }}
                </span>
            </div>

            <Typography
                tag="h3"
                variant="h3"
                class="
                    mt-2
                    text-[16px]
                    font-bold
                    leading-tight
                    text-(--primary-white)
                "
            >
                {{ movie.title }}
            </Typography>

            <Typography
                variant="small"
                class="
                    line-clamp-2
                    mt-1
                    text-[13px]
                    leading-tight
                    text-(--primary-yellow)
                "
            >
                {{ movie.genres.join(", ") }}
            </Typography>
        </NuxtLink>
    </article>
</template>