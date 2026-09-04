<script setup lang="ts">
import {
    Header,
    NowInCinema,
    NewTrailers,
    PopularFilms,
    LastNews,
    ExpectedMovies,
    Footer,
} from "~/widgets";

useSeoMeta({
    title: "Kinoarea — Смотреть фильмы онлайн в хорошем качестве HD 1080",
    description:
        "Онлайн-кинотеатр с огромной базой фильмов, сериалов и мультфильмов. Смотрите новинки кино, свежие трейлеры и читайте последние новости кинематографа бесплатно.",

    ogTitle: "Kinoarea — Фильмы и сериалы онлайн",
    ogDescription:
        "Смотрите фильмы, новинки проката и трейлеры в Full HD качестве.",
    ogImage: "https://yourdomain.com",
    ogType: "website",

    twitterCard: "summary_large_image",
    twitterTitle: "Kinoarea — Смотреть фильмы онлайн",
    twitterDescription: "Новинки кино, трейлеры и новости кинематографа.",
});
</script>

<template>
    <div class="relative overflow-hidden">
        <div class="pointer-events-none absolute inset-0 z-0">
            <NuxtImg
                src="/images/joker.png"
                alt=""
                class="h-full w-full object-contain object-top"
            />

            <div
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-(--primary-bg)"
            />

            <div
                class="absolute inset-0 bg-gradient-to-r from-(--primary-bg)/40 via-transparent to-(--primary-bg)/40"
            />
        </div>

        <div class="relative z-10">
            <Header />
            <NowInCinema />
            <NewTrailers />
            <PopularFilms />
            <LastNews />
            <div class="bg-(--footer-bg)">
                <ExpectedMovies />
                <Footer />
            </div>
        </div>
    </div>
</template>
