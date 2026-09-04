<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { CarouselProps, CarouselEmits } from "../model/types.ts";
import { useCarouselScroll } from "../lib/use-carousel-scroll";
import { useCarouselPage } from "../lib/use-carousel-page";

const props = withDefaults(defineProps<CarouselProps>(), {
    currentPage: 1,
    totalPages: 1,
    controlsPosition: "center",
    controlsPlacement: "bottom",
    orientation: "horizontal",
});

const emit = defineEmits<CarouselEmits>();

const carouselRef = ref<HTMLElement | null>(null);

const {
    activePage,
    setPage,
    goToPrev,
    goToNext,
} = useCarouselPage(props.currentPage, props.totalPages);

const {
    isScrolling,
    getPageSize,
    getScrollPosition,
    scrollToPage,
    lockScroll,
} = useCarouselScroll(carouselRef, props.orientation);

const handleScroll = () => {
    if (!carouselRef.value) return;

    const newPage = Math.round(
        getScrollPosition() / getPageSize()
    ) + 1;

    if (newPage !== activePage.value) {
        setPage(newPage);
        emit("update:currentPage", newPage);
    }
};

const scroll = (direction: "prev" | "next") => {
    if (!carouselRef.value || isScrolling.value) return;

    const hasMoved = direction === "next" 
        ? goToNext() 
        : goToPrev();

    if (!hasMoved) return;

    lockScroll();
    scrollToPage(activePage.value);
    emit(direction);
    emit("update:currentPage", activePage.value);
};

onMounted(() => {
    if (carouselRef.value) {
        carouselRef.value.addEventListener("scroll", handleScroll, {
            passive: true,
        });
    }
});

onUnmounted(() => {
    if (carouselRef.value) {
        carouselRef.value.removeEventListener("scroll", handleScroll);
    }
});
</script>

<template>
    <div
        class="relative w-full"
        :class="{
            'flex h-full flex-col': orientation === 'vertical',
        }"
    >
        <!-- Общий контейнер для заголовка и стрелок -->
        <div
            v-if="
                $slots.header ||
                (orientation === 'horizontal' &&
                    controlsPlacement === 'top')
            "
            class="
                mb-[17px]
                flex
                items-center
                gap-5
                min-[760px]:mb-10
            "
            :class="{
                'justify-between': $slots.header,
                'justify-center':
                    !$slots.header &&
                    controlsPosition === 'center',
                'justify-end':
                    !$slots.header &&
                    controlsPosition === 'right',
            }"
        >
            <!-- Заголовок -->
            <div v-if="$slots.header">
                <slot name="header" />
            </div>

            <!-- Стрелки -->
            <div
                v-if="
                    orientation === 'horizontal' &&
                    controlsPlacement === 'top'
                "
                class="flex items-center gap-5"
            >
                <button
                    type="button"
                    :disabled="activePage <= 1"
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
                    {{ activePage }}/{{ totalPages }}
                </span>

                <button
                    type="button"
                    :disabled="activePage >= totalPages"
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
        </div>

        <button
            v-if="orientation === 'vertical'"
            type="button"
            :disabled="activePage <= 1"
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
                    'flex min-w-0':
                        orientation === 'horizontal',
                    'flex flex-col gap-3':
                        orientation === 'vertical',
                }"
            >
                <slot />
            </div>
        </div>

        <div
            v-if="
                orientation === 'horizontal' &&
                controlsPlacement === 'bottom'
            "
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
                :disabled="activePage <= 1"
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
                {{ activePage }}/{{ totalPages }}
            </span>

            <button
                type="button"
                :disabled="activePage >= totalPages"
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
            :disabled="activePage >= totalPages"
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