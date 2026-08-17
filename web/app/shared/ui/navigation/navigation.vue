<script setup lang="ts">
import { Typography } from "~/shared/ui";

const navigationItems = [
    "Афиша",
    "Медиа",
    "Фильмы",
    "Актёры",
    "Новости",
    "Подборки",
    "Категории",
];
</script>

<template>
    <nav class="flex items-center gap-10">
        <a
            v-for="item in navigationItems"
            :key="item"
            href="#"
            class="transition-opacity hover:opacity-70"
        >
            <Typography variant="body">
                {{ item }}
            </Typography>
        </a>
    </nav>
</template>