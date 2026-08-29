<script setup lang="ts">
import { Typography } from "~/shared/ui";

import type { Trailer } from "../model/types";

defineProps<{
    trailer: Trailer;
}>();
</script>

<template>
    <article>
        <div
            class="relative aspect-video overflow-hidden rounded-[4px] bg-black"
        >
            <iframe
                :src="trailer.videoUrl"
                :title="trailer.title"
                class="h-full w-full"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
            />
        </div>

        <div class="mt-2 flex items-center justify-between min-[500px]:mt-3">
            <Typography
                variant="body"
                class="text-[25px] font-bold text-(--primary-white) min-[500px]:text-[32px] xl:text-[45px]"
            >
                {{ trailer.title }}
            </Typography>

            <div
                v-if="trailer.stats"
                class="flex items-center gap-3 min-[500px]:gap-6"
            >
                <div
                    class="flex flex-col items-center gap-1 min-[500px]:gap-3"
                >
                    <button
                        type="button"
                        class="flex size-9 items-center justify-center rounded-[8px] bg-(--primary-darkblue) text-(--primary-white) min-[500px]:size-[58px] min-[500px]:rounded-[10px]"
                    >
                        👍
                    </button>

                    <Typography
                        variant="body"
                        class="font-normal text-(--primary-white)"
                    >
                        {{ trailer.stats.likes }}
                    </Typography>
                </div>

                <div
                    class="flex flex-col items-center gap-1 min-[500px]:gap-3"
                >
                    <button
                        type="button"
                        class="flex size-9 items-center justify-center rounded-[8px] bg-(--primary-darkblue) text-(--primary-white) min-[500px]:size-[58px] min-[500px]:rounded-[10px]"
                    >
                        👎
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