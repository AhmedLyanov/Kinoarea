<script setup lang="ts">
import { ref } from "vue";

import { TrailerCard, TrailerPlayer } from "~/entities/trailer";
import { Typography } from "~/shared/ui";

import { trailers } from "../model/data";

const activeTrailer = ref(trailers[0] ?? null);
</script>

<template>
    <section class="relative z-10 mx-auto max-w-[1430px]">
        <div class="mb-7 flex items-center justify-between">
            <Typography variant="h1">
                Новые трейлеры
            </Typography>

            <NuxtLink to="/trailers">
                <Typography
                    variant="body"
                    class="text-[22px] font-bold text-(--primary-white)"
                >
                    Все трейлеры
                </Typography>
            </NuxtLink>
        </div>

        <TrailerPlayer
            v-if="activeTrailer"
            :trailer="activeTrailer"
        />

        <div class="mt-5 grid grid-cols-4 gap-2">
            <TrailerCard
                v-for="trailer in trailers.slice(1)"
                :key="trailer.id"
                :trailer="trailer"
                @click="activeTrailer = trailer"
            />
        </div>
    </section>
</template>