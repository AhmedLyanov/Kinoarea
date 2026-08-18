<script setup lang="ts">
import { Typography } from "~/shared/ui";
import type { Trailer } from "../model/types";

defineProps<{
    trailer: Trailer;
}>();
</script>

<template>
    <article>
        <div class="relative aspect-video overflow-hidden rounded-[4px]">
            <img
                :src="trailer.thumbnail"
                :alt="trailer.title"
                class="h-full w-full object-cover"
            />

            <button
                type="button"
                class="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black"
            >
                <Icon name="lucide:play" class="size-6 fill-current" />
            </button>
        </div>

        <div class="mt-3 flex items-center justify-between">
            <Typography variant="body" class="text-[45px] font-bold text-(--primary-white)">
                {{ trailer.title }}
            </Typography>

            <div v-if="trailer.stats" class="flex items-center gap-6">
                <div class="flex flex-col items-center gap-3">
                    <button
                        type="button"
                        class="flex w-[58px] h-[58px] size-[88px] items-center justify-center rounded-[10px] bg-(--primary-darkblue) text-(--primary-white) transition-colors"
                    >
                        <Icon
                            name="lucide:thumbs-up"
                            class="size-10 fill-current"
                        />
                    </button>

                    <Typography
                        variant="body"
                        class="font-normal text-(--primary-white)"
                    >
                        {{ trailer.stats.likes }}
                    </Typography>
                </div>

                <div class="flex flex-col items-center gap-3">
                    <button
                        type="button"
                        class="flex w-[58px] h-[58px] size-[88px] items-center justify-center rounded-[10px] bg-(--primary-darkblue) text-(--primary-white) transition-colors"
                    >
                        <Icon
                            name="lucide:thumbs-down"
                            class="size-10 fill-current"
                        />
                    </button>

                    <Typography
                        variant="body"
                        class="font-normal text-(--primary-white)"
                    >
                        {{ trailer.stats.dislikes }}
                    </Typography>
                </div>
            </div>
        </div>
    </article>
</template>
