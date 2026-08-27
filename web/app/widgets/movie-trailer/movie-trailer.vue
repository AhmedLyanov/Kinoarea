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
        class="relative z-10 mx-auto mt-10 max-w-[1430px]"
    >
        <div class="mb-7 flex items-center justify-between">
            <Typography variant="h1">
                Трейлер фильма
            </Typography>

            <NuxtLink to="/trailers">
                <Typography
                    variant="body"
                    class="text-[22px] font-bold text-(--primary-white)"
                >
                    Все трейлеры
                </Typography>
            </NuxtLink>
        </div>

        <TrailerPlayer :trailer="trailer" />
    </section>
</template>