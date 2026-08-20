<template>
    <div class="flex flex-col items-center">
        <div
            class="relative size-[52px] rounded-full"
            :style="{
                backgroundColor: ratingBackground,
            }"
        >
            <svg
                class="absolute inset-0 size-full -rotate-90"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    :stroke="ratingColor"
                    stroke-width="14"
                    stroke-linecap="butt"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="dashOffset"
                />
            </svg>

            <span
                class="absolute inset-0 flex items-center justify-center text-[13px] font-medium text-white"
            >
                {{ value.toFixed(2) }}
            </span>
        </div>

        <span class="mt-1 text-[15px] text-white">
            {{ label }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
    value: number;
    label: string;
    max?: number;
}

const props = withDefaults(defineProps<Props>(), {
    max: 10,
});

const percentage = computed(() => {
    return Math.min(Math.max(props.value / props.max, 0), 1);
});

const circumference = 2 * Math.PI * 40;

const dashOffset = computed(() => {
    return circumference * (1 - percentage.value);
});

const hue = computed(() => {
    return percentage.value * 120;
});

const ratingColor = computed(() => {
    return `hsl(${hue.value}, 70%, 50%)`;
});

const ratingBackground = computed(() => {
    return `hsla(${hue.value}, 70%, 50%, 0.3)`;
});
</script>