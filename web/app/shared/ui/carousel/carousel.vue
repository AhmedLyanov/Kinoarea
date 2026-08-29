<script setup lang="ts">

import { ref } from "vue";

const props = withDefaults(
    defineProps<{
        currentPage?: number;
        totalPages?: number;
        controlsPosition?: "center" | "right";
        orientation?: "horizontal" | "vertical";
    }>(),
    {
        currentPage: 1,
        totalPages: 1,
        controlsPosition: "center",
        orientation: "horizontal",
    },
);

const emit = defineEmits<{
    prev: [];
    next: [];
}>();

const carouselRef = ref<HTMLElement | null>(null);

const scroll = (direction: "prev" | "next") => {
    if (!carouselRef.value) return;

    const amount =
        props.orientation === "vertical"
            ? carouselRef.value.clientHeight
            : carouselRef.value.clientWidth;

    carouselRef.value.scrollBy({
        [props.orientation === "vertical" ? "top" : "left"]:
            direction === "next" ? amount : -amount,
        behavior: "smooth",
    });

    emit(direction);
};

</script>

<template>

    <div
        class="relative w-full"
        :class="{
            'flex h-full flex-col': orientation === 'vertical',
        }"
    >

        <button
            v-if="orientation === 'vertical'"
            type="button"
            :disabled="currentPage <= 1"
            class="
                mx-auto
                flex
                size-6
                shrink-0
                items-center
                justify-center
                text-(--primary-white)
                transition-opacity
                hover:opacity-70
                disabled:cursor-not-allowed
                disabled:opacity-30
            "
            @click="scroll('prev')"
        >
            <Icon
                name="lucide:chevron-up"
                class="size-5"
            />
        </button>

        <div
            ref="carouselRef"
            class="scrollbar-none scroll-smooth"
            :class="{
                'overflow-x-auto':
                    orientation === 'horizontal',
                'min-h-0 flex-1 overflow-y-auto':
                    orientation === 'vertical',
            }"
        >

            <div
                :class="{
                    'min-w-0':
                        orientation === 'horizontal',
                    'flex flex-col gap-3':
                        orientation === 'vertical',
                }"
            >
                <slot />
            </div>

        </div>

        <div
            v-if="orientation === 'horizontal'"
            class="
                mt-[17px]
                flex
                items-center
                gap-5
                min-[760px]:mt-10
            "
            :class="{
                'justify-center':
                    controlsPosition === 'center',
                'justify-end':
                    controlsPosition === 'right',
            }"
        >

            <button
                type="button"
                :disabled="currentPage <= 1"
                class="
                    flex
                    size-8
                    items-center
                    justify-center
                    text-(--primary-white)
                    transition-opacity
                    hover:opacity-70
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
                @click="scroll('prev')"
            >
                <Icon
                    name="lucide:arrow-left"
                    class="size-9"
                />
            </button>

            <span
                class="
                    min-w-[40px]
                    text-center
                    text-[16px]
                    text-(--primary-white)
                "
            >
                {{ currentPage }}/{{ totalPages }}
            </span>

            <button
                type="button"
                :disabled="currentPage >= totalPages"
                class="
                    flex
                    size-8
                    items-center
                    justify-center
                    text-(--primary-white)
                    transition-opacity
                    hover:opacity-70
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
                @click="scroll('next')"
            >
                <Icon
                    name="lucide:arrow-right"
                    class="size-9"
                />
            </button>

        </div>

        <button
            v-if="orientation === 'vertical'"
            type="button"
            aria-label="Следующие новости"
            :disabled="currentPage >= totalPages"
            class="
                mx-auto
                flex
                size-6
                shrink-0
                items-center
                justify-center
                text-(--primary-white)
                transition-opacity
                hover:opacity-70
                disabled:cursor-not-allowed
                disabled:opacity-30
            "
            @click="scroll('next')"
        >
            <Icon
                name="lucide:chevron-down"
                class="size-5"
            />
        </button>

    </div>

</template>