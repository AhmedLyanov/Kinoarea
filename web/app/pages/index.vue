<template>
    <Header />
    <main class="min-h-screen">
        <h1 class="text-center">hkj</h1>

        <p>{{ data }}</p>
    </main>
</template>

<script setup lang="ts">
const { data } = useFetch("/api/hello");
import { Header } from "~/widgets";
</script>
