<template>
    <div>
        <Header />

        <main class="relative z-10 mx-auto mt-[57px] max-w-[1430px]">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { Header, Footer } from "@/widgets";
</script>
