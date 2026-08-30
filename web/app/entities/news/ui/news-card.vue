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
        class="
            relative
            overflow-hidden
            rounded-[6px]
        "
        :class="{
            'aspect-[3/2] w-full':
                variant === 'featured',

            'aspect-[1.4] w-full':
                variant === 'small',
        }"
    >
        <img
            :src="news.image"
            :alt="news.title"
            class="
                absolute
                inset-0
                h-full
                w-full
                object-cover
            "
        >

        <div
            class="
                absolute
                inset-0
                bg-black/20
            "
        />

        <div
            class="
                relative
                z-10
                flex
                h-full
                flex-col
                justify-between
            "
            :class="{
                'p-5 min-[760px]:p-6':
                    variant === 'featured',

                'p-3 min-[760px]:p-4':
                    variant === 'small',
            }"
        >
            <span
                class="
                    text-[14px]
                    font-[700]
                    leading-[191%]
                    text-(--primary-white)
                    [font-family:Qanelas]
                    min-[760px]:text-[15px]
                "
            >
                {{ news.date }}
            </span>

            <div
                :class="{
                    'max-w-[850px]':
                        variant === 'featured',
                }"
            >
                <Typography
                    :variant="
                        variant === 'featured'
                            ? 'h2'
                            : 'body'
                    "
                    class="
                        font-bold
                        text-(--primary-white)
                    "
                    :class="{
                        'text-[24px] leading-[110%] min-[760px]:text-[30px]':
                            variant === 'featured',

                        'line-clamp-2 text-[15px] leading-[110%] min-[760px]:text-[18px] min-[760px]:leading-[100%]':
                            variant === 'small',
                    }"
                >
                    {{ news.title }}
                </Typography>

                <Typography
                    v-if="
                        news.description &&
                        variant === 'featured'
                    "
                    variant="body"
                    class="
                        mt-3
                        hidden
                        text-[16px]
                        leading-relaxed
                        text-white/90
                        min-[760px]:mt-4
                        min-[760px]:block
                    "
                >
                    {{ news.description }}
                </Typography>
            </div>
        </div>
    </article>
</template>