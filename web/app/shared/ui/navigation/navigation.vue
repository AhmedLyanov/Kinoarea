<script setup lang="ts">
import { Typography } from "~/shared/ui";

const navigationItems = [
    {
        label: "Афиша",
        to: "/",
    },
    {
        label: "Медиа",
        to: "/media",
    },
    {
        label: "Фильмы",
        to: "/movies",
    },
    {
        label: "Актёры",
        to: "/actors",
    },
    {
        label: "Новости",
        to: "/news",
    },
    {
        label: "Подборки",
        to: "/collections",
    },
    {
        label: "Категории",
        to: "/categories",
    },
];
</script>

<template>
    <nav class="flex items-center gap-10">
        <NuxtLink
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.to"
            class="transition-opacity hover:opacity-70"
        >
            <Typography
                variant="body"
                class="font-bold text-(--primary-white)"
            >
                {{ item.label }}
            </Typography>
        </NuxtLink>
    </nav>
</template>