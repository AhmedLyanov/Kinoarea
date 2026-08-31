<script setup lang="ts">
import {
    nextTick,
    onBeforeUnmount,
    onMounted,
    ref,
    watch,
} from "vue";

const props = withDefaults(
    defineProps<{
        lines?: number;
        tag?: string;
        class?: string;
    }>(),
    {
        lines: 1,
        tag: "span",
        class: "",
    },
);

const isExpanded = ref(false);
const isOverflowing = ref(false);
const textElement = ref<HTMLElement | null>(null);

let resizeObserver: ResizeObserver | null = null;

const checkOverflow = () => {
    const element = textElement.value;

    if (!element || isExpanded.value) {
        return;
    }

    isOverflowing.value =
        element.scrollHeight > element.clientHeight + 1;
};

const toggle = async () => {
    isExpanded.value = !isExpanded.value;

    await nextTick();
    checkOverflow();
};

onMounted(async () => {
    await nextTick();

    checkOverflow();

    if (textElement.value) {
        resizeObserver = new ResizeObserver(checkOverflow);
        resizeObserver.observe(textElement.value);
    }
});

watch(isExpanded, async () => {
    await nextTick();
    checkOverflow();
});

onBeforeUnmount(() => {
    resizeObserver?.disconnect();
});
</script>

<template>
    <div class="min-w-0">
        <component
            :is="props.tag"
            ref="textElement"
            :class="[
                'min-w-0',
                !isExpanded && 'overflow-hidden',
                props.class,
            ]"
            :style="
                !isExpanded
                    ? {
                          display: '-webkit-box',
                          '-webkit-box-orient': 'vertical',
                          '-webkit-line-clamp': props.lines,
                      }
                    : undefined
            "
        >
            <slot />
        </component>

        <button
            v-if="isOverflowing || isExpanded"
            type="button"
            :aria-expanded="isExpanded"
            class="mt-1 text-sm text-(--primary-gray) transition-opacity hover:opacity-70"
            @click="toggle"
        >
            {{ isExpanded ? "Свернуть" : "Подробнее" }}
        </button>
    </div>
</template>