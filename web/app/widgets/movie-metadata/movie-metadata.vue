<template>
    <section class="grid grid-cols-2 gap-x-[90px] gap-y-5 pt-[45px]">
        <!-- Левая колонка -->
        <div
            v-for="item in leftMetadata"
            :key="item.label"
            class="grid min-w-0 grid-cols-[180px_minmax(0,1fr)] items-center"
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
                class="min-w-0 truncate text-(--primary-yellow)"
            >
                {{ item.value }}
            </Typography>
        </div>

        <!-- Правая колонка -->
        <div
            v-for="item in rightMetadata"
            :key="item.label"
            class="grid min-w-0 grid-cols-[180px_minmax(0,1fr)] items-center"
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
                class="min-w-0 truncate text-(--primary-yellow)"
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
        label: "Страна",
        value: props.movie.country?.length
            ? props.movie.country.join(", ")
            : "Не указано",
    },
    {
        label: "Жанр",
        value: props.movie.genres?.length
            ? props.movie.genres.join(", ")
            : "Не указан",
    },
    {
        label: "Возраст",
        value: props.movie.age
            ? `${props.movie.age}+`
            : "Не указан",
    },
    {
        label: "Качество",
        value: props.movie.quality ?? "Не указано",
    },
    {
        label: "Режиссёр",
        value: props.movie.directors?.length
            ? props.movie.directors.join(", ")
            : "Не указан",
    },
    {
        label: "Продюсеры",
        value: props.movie.producers?.length
            ? props.movie.producers.join(", ")
            : "Не указаны",
    },
]);

const rightMetadata = computed(() => [
    {
        label: "IMDb",
        value:
            props.movie.rating.imdb !== null
                ? props.movie.rating.imdb.toFixed(1)
                : "Нет рейтинга",
    },
    {
        label: "Kinoarea",
        value:
            props.movie.rating.kinopoisk !== null
                ? props.movie.rating.kinopoisk.toFixed(1)
                : "Нет рейтинга",
    },
    {
        label: "Премьера РФ",
        value: props.movie.releaseDate ?? "Не указана",
    },
    {
        label: "Продолжительность",
        value: props.movie.duration ?? "Не указана",
    },
    {
        label: "Оригинальное название",
        value: props.movie.originalTitle ?? "Не указано",
    },
    {
        label: "Актёры",
        value: props.movie.actors?.length
            ? props.movie.actors.join(", ")
            : "Не указаны",
    },
]);
</script>