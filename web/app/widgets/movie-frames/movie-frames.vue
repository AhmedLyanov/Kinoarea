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
        <div
            class="
                mb-7
                flex
                flex-col
                items-center
                gap-5

                md:flex-row
                md:items-end
                md:justify-between
                md:gap-0
            "
        >
            <div
                class="
                    flex
                    w-full
                    flex-col
                    items-center
                    gap-5

                    md:w-auto
                    md:items-start
                    md:gap-3
                "
            >
                <Typography
                    variant="h1"
                    class="
                        text-center
                        font-[900]
                        leading-none

                        md:text-left
                    "
                >
                    Кадры из фильма
                </Typography>

                <NuxtLink
                    to="/frames"
                    class="
                        flex
                        items-center
                        gap-4
                    "
                >
                    <Typography
                        variant="body"
                        class="
                            text-center
                            text-[22px]
                            font-bold
                            leading-none
                            text-(--primary-white)

                            md:text-left
                        "
                    >
                        Все кадры
                    </Typography>

                    <span
                        class="
                            text-[28px]
                            leading-none
                            text-(--primary-white)
                        "
                    >
                        →
                    </span>
                </NuxtLink>
            </div>

            <NuxtLink
                to="/frames"
                class="
                    hidden
                    items-center
                    gap-4

                    md:flex
                "
            >
                <Typography
                    variant="body"
                    class="
                        mb-1
                        text-[22px]
                        font-bold
                        leading-none
                        text-(--primary-white)
                    "
                >
                    Все кадры
                </Typography>

                <span
                    class="
                        text-[28px]
                        leading-none
                        text-(--primary-white)
                    "
                >
                    →
                </span>
            </NuxtLink>
        </div>

        <Typography
            variant="h3"
            class="
                mb-5
                text-[25px]
                font-semibold
                leading-none
                text-(--primary-white)

                md:mb-7
            "
        >
            {{ movie.title }}
        </Typography>

        <div
            class="
                grid
                grid-cols-1
                gap-4

                md:grid-cols-4
                md:grid-rows-2
                md:gap-3
            "
        >
            <a
                v-for="(frame, index) in visibleFrames"
                :key="frame.imageUrl"
                :href="frame.imageUrl"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                    'relative block min-h-0 overflow-hidden rounded-[6px]',
                    index === 0 || index === 5
                        ? 'md:col-span-2'
                        : 'md:col-span-1',
                ]"
            >
                <img
                    :src="frame.previewUrl"
                    :alt="`${movie.title} — кадр ${index + 1}`"
                    class="
                        block
                        h-auto
                        min-h-[220px]
                        w-full
                        object-cover

                        md:h-full
                        md:min-h-[260px]
                    "
                >

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