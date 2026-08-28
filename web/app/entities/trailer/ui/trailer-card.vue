<script setup lang="ts">
import { Typography } from "~/shared/ui";
import type { Trailer } from "../model/types";

defineProps<{
    trailer: Trailer;
}>();
</script>

<template>
    <article class="group cursor-pointer">
        <div
            class="
                relative
                aspect-video
                overflow-hidden
                rounded-[4px]
            "
        >
            <img
                :src="trailer.thumbnail"
                :alt="trailer.title"
                class="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                "
            >

            <div
                class="
                    absolute
                    inset-0
                    bg-black/20
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                "
            >
                <button
                    type="button"
                    class="
                        absolute
                        left-1/2
                        top-1/2
                        flex
                        size-8
                        -translate-x-1/2
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        bg-white/90
                        text-black
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                    "
                >
                    ▶
                </button>
            </div>
        </div>

        <Typography
            variant="body"
            class="mt-2.75 text-[20px] font-bold"
        >
            {{ trailer.title }}
        </Typography>
    </article>
</template>