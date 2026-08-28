<script setup lang="ts">
import { getMovieFrames } from "~/entities/movie/api/get-movie-frames";
import type { Movie } from "~/entities/movie";
import { Typography } from "~/shared/ui";

const props = defineProps<{
    movie: Movie;
}>();

const { data, pending, error } = await useAsyncData(
    `movie-frames-${props.movie.id}`,
    () => getMovieFrames(props.movie.id),
);

const frames = computed(() => data.value?.items ?? []);

const visibleFrames = computed(() => frames.value.slice(0, 6));

const remainingCount = computed(() =>
    Math.max(frames.value.length - 6, 0),
);
</script>

<template>
    <section
        v-if="frames.length"
        class="mt-16"
    >
        <!-- Header -->
        <div class="mb-7 flex items-end justify-between">
            <div class="flex flex-col gap-3">
                <Typography
                    variant="h1"
                    class="font-[900] leading-none"
                >
                    Кадры из фильма
                </Typography>

                <Typography
                    variant="h3"
                    class="text-[25px] font-semibold leading-none text-(--primary-white)"
                >
                    {{ movie.title }}
                </Typography>
            </div>

            <NuxtLink
                to="/frames"
                class="group flex items-center gap-4"
            >
                <Typography
                    variant="body"
                    class="mb-1 text-[22px] font-bold leading-none text-(--primary-white) transition-colors group-hover:text-(--primary-yellow)"
                >
                    Все кадры
                </Typography>

                <span
                    class="text-[28px] leading-none text-(--primary-white) transition-transform duration-300 group-hover:translate-x-1"
                >
                    →
                </span>
            </NuxtLink>
        </div>

        <!-- Frames -->
        <div
            class="
                grid
                grid-cols-4
                grid-rows-2
                gap-3
                overflow-hidden
            "
        >
            <a
                v-for="(frame, index) in visibleFrames"
                :key="frame.imageUrl"
                :href="frame.imageUrl"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                    'group relative min-h-0 overflow-hidden rounded-[6px]',
                    index === 0 || index === 5
                        ? 'col-span-2'
                        : 'col-span-1',
                ]"
            >
                <img
                    :src="frame.previewUrl"
                    :alt="`${movie.title} — кадр ${index + 1}`"
                    class="
                        h-full
                        min-h-[260px]
                        w-full
                        object-cover
                        transition-transform
                        duration-300
                        group-hover:scale-105
                    "
                >

                <!-- More overlay -->
                <div
                    v-if="
                        index === visibleFrames.length - 1 &&
                        remainingCount > 0
                    "
                    class="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-[#3158A8]/80
                        transition-colors
                        duration-300
                        group-hover:bg-[#3158A8]/90
                    "
                >
                    <Typography
                        variant="body"
                        class="
                            text-[32px]
                            font-bold
                            leading-none
                            text-(--primary-white)
                        "
                    >
                        +{{ remainingCount }}
                    </Typography>
                </div>
            </a>
        </div>
    </section>

    <section
        v-else-if="!pending && error"
        class="mt-10"
    >
        <Typography variant="body">
            Не удалось загрузить кадры фильма.
        </Typography>
    </section>
</template>