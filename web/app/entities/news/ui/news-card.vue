<script setup lang="ts">
import { Typography } from "~/shared/ui";
import type { News } from "../model/types";

withDefaults(
    defineProps<{
        news: News;
        variant?: "featured" | "small";
    }>(),
    {
        variant: "featured",
    },
);
</script>

<template>
    <article
        class="relative overflow-hidden rounded-[6px]"
        :class="{
            'h-full w-full': variant === 'featured',
            'h-[180px] w-[250px] shrink-0': variant === 'small',
        }"
    >
        <img
            :src="news.image"
            class="absolute inset-0 h-full w-full object-cover"
        >

        <div
            class="
                absolute
                inset-0
            "
        />

        <div
            class="relative z-10 flex h-full flex-col justify-between"
            :class="{
                'p-6': variant === 'featured',
                'p-4': variant === 'small',
            }"
        >
            <span
                class="
                    text-(--primary-white)
                    [font-family:Qanelas]
                    font-[700]
                    text-[15px]
                    leading-[191%]
                "
            >
                {{ news.date }}
            </span>

            <div
                :class="{
                    'max-w-[850px]': variant === 'featured',
                }"
            >
                <Typography
                    :variant="variant === 'featured' ? 'h2' : 'body'"
                    class="font-bold text-(--primary-white)"
                    :class="{
                        'line-clamp-2 text-[18px] leading-[100%]':
                            variant === 'small',
                    }"
                >
                    {{ news.title }}
                </Typography>

                <Typography
                    v-if="news.description && variant === 'featured'"
                    variant="body"
                    class="mt-4 text-white/90"
                >
                    {{ news.description }}
                </Typography>
            </div>
        </div>
    </article>
</template>