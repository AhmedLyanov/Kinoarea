<script setup lang="ts">
import type { Movie } from "~/entities/movie";

defineProps<{
    movie: Movie;
}>();
</script>

<template>
    <section
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
                relative
                aspect-video
                overflow-hidden
                rounded-[4px]
            "
        >
            <iframe
                :src="movie.iframeUrl"
                :title="movie.title"
                class="h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
            />
        </div>
    </section>
</template>