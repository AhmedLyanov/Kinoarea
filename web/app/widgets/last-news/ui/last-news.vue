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
            mt-12
            w-full
            max-w-[1430px]
            px-[29px]
            min-[760px]:mt-16
            min-[760px]:px-[54px]
            xl:mt-16.25
            xl:px-0
        "
    >
        <div
            class="
                flex
                flex-col
                items-center
                gap-2
                min-[760px]:flex-row
                min-[760px]:justify-between
                min-[760px]:gap-0
            "
        >
            <Typography variant="h1">
                Последние новости
            </Typography>

            <NuxtLink to="/news">
                <Typography
                    variant="body"
                    class="
                        flex
                        items-center
                        gap-3
                        text-[18px]
                        font-bold
                        text-(--primary-white)
                        min-[760px]:text-[22px]
                    "
                >
                    Все новости

                    <Icon
                        name="lucide:arrow-right"
                        class="size-6 min-[760px]:size-7"
                    />
                </Typography>
            </NuxtLink>
        </div>

        <div
            class="
                mt-6
                grid
                grid-cols-1
                gap-3
                min-[760px]:mt-10
                xl:mt-10
                xl:grid-cols-[minmax(0,1fr)_250px]
            "
        >
            <NewsCard
                :news="news[0]"
                variant="featured"
            />

            <div
                class="
                    grid
                    grid-cols-2
                    gap-3
                    xl:flex
                    xl:flex-col
                "
            >
                <NewsCard
                    v-for="(item, index) in news.slice(1, 5)"
                    :key="item.id"
                    :news="item"
                    variant="small"
                    :class="{
                        'hidden min-[760px]:block':
                            index >= 2,
                    }"
                />
            </div>
        </div>
    </section>
</template>