<script setup lang="ts">
import { TrailerPlayer } from "~/entities/trailer";
import { Typography } from "~/shared/ui";
import type { Movie } from "~/entities/movie";
import type { Trailer } from "~/entities/trailer";

const props = defineProps<{
    movie: Movie;
}>();

const trailer = computed<Trailer | null>(() => {
    if (!props.movie.trailerUrl) {
        return null;
    }

    return {
        id: String(props.movie.id),
        movieId: String(props.movie.id),
        title: `Трейлер фильма «${props.movie.title}»`,
        thumbnail: props.movie.poster,
        videoUrl: props.movie.trailerUrl,
    };
});
</script>

<template>
    <section
        v-if="trailer"
        class="
            relative
            z-10
            mx-auto
            mt-10
            max-w-[1430px]
        "
    >
        <div
            class="
                mb-7
                flex
                flex-col
                items-center
                gap-3

                md:flex-row
                md:items-center
                md:justify-between
                md:gap-0
            "
        >
            <Typography variant="h1">
                Трейлер фильма
            </Typography>

            <NuxtLink
                to="/trailers"
                class="
                    flex
                    items-center
                    gap-4
                "
            >
                <Typography
                    variant="body"
                    class="
                        text-[18px]
                        font-bold
                        text-(--primary-white)

                        md:text-[22px]
                    "
                >
                    Все трейлеры
                </Typography>

                <span
                    class="
                        text-[28px]
                        leading-none
                        text-(--primary-white)
                    "
                >
                    →
                </span>
            </NuxtLink>
        </div>

        <TrailerPlayer :trailer="trailer" />
    </section>
</template>