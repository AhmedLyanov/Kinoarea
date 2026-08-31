<template>
    <section
        class="pt-8 md:grid md:grid-cols-2 md:gap-x-[60px] md:gap-y-5 lg:gap-x-[90px] lg:pt-[45px]"
    >
        <div
            v-for="item in metadata"
            :key="item.label"
            class="grid min-w-0 grid-cols-[fit-content(180px)_minmax(0,1fr)] gap-3 py-1.5 md:py-0"
        >
            <Typography
                variant="body"
                tag="span"
                class="whitespace-nowrap font-medium text-white"
            >
                {{ item.label }}:
            </Typography>

            <ExpandableText :lines="1">
                <Typography
                    variant="body"
                    tag="span"
                    class="min-w-0 text-(--primary-yellow)"
                >
                    {{ item.value }}
                </Typography>
            </ExpandableText>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Typography, ExpandableText } from "@/shared/ui";
import type { Movie } from "~/entities/movie";

const props = defineProps<{
    movie: Movie;
}>();

const metadata = computed(() => [
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
        value: props.movie.age ? `${props.movie.age}+` : "Не указан",
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