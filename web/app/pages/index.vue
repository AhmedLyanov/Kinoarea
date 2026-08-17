<template>
    <Header />

    <main class="min-h-screen">
        <Typography variant="h1">
            Сейчас в кино
        </Typography>
    </main>
</template>

<script setup lang="ts">
import { Header } from "~/widgets";
import { Typography } from "~/shared/ui";

const { data } = useFetch("/api/hello");
</script>