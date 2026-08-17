<script setup lang="ts">
import { Header, NowInCinema } from "~/widgets";
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
                class="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-transparent
                    via-transparent
                    to-(--primary-bg)
                "
            />

            <div
                class="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-(--primary-bg)/40
                    via-transparent
                    to-(--primary-bg)/40
                "
            />
        </div>

        <div class="relative z-10">
            <Header />
            <NowInCinema />
        </div>
    </div>
</template>