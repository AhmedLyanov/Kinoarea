<template>
    <section class="grid grid-cols-2 gap-x-[90px] gap-y-5">
        <div
            v-for="item in leftMetadata"
            :key="item.label"
            class="grid grid-cols-[180px_1fr] items-center"
        >
            <Typography
                variant="body"
                tag="span"
                class="whitespace-nowrap font-medium text-white"
            >
                {{ item.label }}:
            </Typography>

            <Typography
                variant="body"
                tag="span"
                class="whitespace-nowrap underline text-(--primary-yellow)"
            >
                {{ item.value }}
            </Typography>
        </div>

        <div
            v-for="item in rightMetadata"
            :key="item.label"
            class="grid grid-cols-[180px_1fr] items-center"
        >
            <Typography
                variant="body"
                tag="span"
                class="whitespace-nowrap font-medium text-white"
            >
                {{ item.label }}:
            </Typography>

            <Typography
                variant="body"
                tag="span"
                class="whitespace-nowrap underline text-(--primary-yellow)"
            >
                {{ item.value }}
            </Typography>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Typography } from "@/shared/ui";
import type { Movie } from "~/entities/movie";

const props = defineProps<{
    movie: Movie;
}>();

const leftMetadata = computed(() => [
    {
        label: "Год",
        value: props.movie.year,
    },
    {
        label: "Возраст",
        value: props.movie.age ?? "Не указан",
    },
    {
        label: "Качество",
        value: props.movie.quality ?? "Не указано",
    },
]);

const rightMetadata = computed(() => [
    {
        label: "IMDb",
        value: props.movie.rating.imdb ?? "Нет рейтинга",
    },
    {
        label: "Kinoarea",
        value: props.movie.rating.kinopoisk ?? "Нет рейтинга",
    },
]);
</script>
