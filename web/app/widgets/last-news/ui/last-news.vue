<script setup lang="ts">
import { Typography } from "~/shared/ui";
import { NewsCard } from "~/entities/news";

import { news } from "../model/data";
</script>

<template>
    <section
        class="
            relative
            z-10
            mx-auto
            mt-16.25
            max-w-[1430px]
        "
    >
        <div class="flex items-center justify-between">
            <Typography variant="h1">
                Последние новости
            </Typography>

            <NuxtLink to="/news">
                <Typography
                    variant="body"
                    class="
                        flex
                        items-center
                        gap-2
                        text-[22px]
                        font-bold
                        text-(--primary-white)
                    "
                >
                    Все новости

                    <Icon
                        name="lucide:arrow-right"
                        class="size-7"
                    />
                </Typography>
            </NuxtLink>
        </div>

        <div
            class="
                mt-20
                grid
                grid-cols-[minmax(0,1fr)_250px]
                gap-3
            "
        >
            <NewsCard
                :news="news[0]"
                variant="featured"
            />

            <div class="flex flex-col gap-3">
                <NewsCard
                    v-for="item in news.slice(1, 5)"
                    :key="item.id"
                    :news="item"
                    variant="small"
                />
            </div>
        </div>
    </section>
</template>