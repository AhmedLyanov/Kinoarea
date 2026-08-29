<script setup lang="ts">
import { ref } from "vue";

import { TrailerCard, TrailerPlayer } from "~/entities/trailer";
import { Typography } from "~/shared/ui";

import { trailers } from "../model/data";

const activeTrailer = ref(trailers[0] ?? null);
</script>

<template>
    <section
        class="relative z-10 mx-auto max-w-[1430px] px-[29px] min-[760px]:px-[54px] xl:px-0"
    >
        <div
            class="mb-5 flex flex-col items-center gap-1 min-[760px]:mb-7 min-[760px]:flex-row min-[760px]:items-center min-[760px]:justify-between min-[760px]:gap-0"
        >
            <Typography variant="h1">
                Новые трейлеры
            </Typography>

            <NuxtLink to="/trailers">
                <Typography
                    variant="body"
                    class="text-[14px] font-bold text-(--primary-white) min-[760px]:text-[22px]"
                >
                    Все трейлеры
                    <span class="ml-1">→</span>
                </Typography>
            </NuxtLink>
        </div>

        <TrailerPlayer
            v-if="activeTrailer"
            :trailer="activeTrailer"
        />

       <div
    class="mt-5 flex gap-2 overflow-x-auto scrollbar-hide min-[760px]:grid min-[760px]:grid-cols-4 min-[760px]:overflow-visible"
>
    <TrailerCard
        v-for="trailer in trailers.slice(1)"
        :key="trailer.id"
        :trailer="trailer"
        class="w-[178px] shrink-0 min-[760px]:w-auto min-[760px]:shrink"
        @click="activeTrailer = trailer"
    />
</div>
    </section>
</template>