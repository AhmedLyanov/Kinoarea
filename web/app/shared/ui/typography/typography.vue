<template>
    <component :is="tag" :class="[classes, $attrs.class]">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "body"
    | "small"
    | "caption";

interface Props {
    tag?: string;
    variant?: TypographyVariant;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "p",
    variant: "body",
});

const classes = computed(() => {
    const variants: Record<TypographyVariant, string> = {
h1: "text-[32px] min-[760px]:text-[40px] xl:text-[65px] font-bold leading-tight",
        h2: "text-3xl font-bold leading-tight",
        h3: "text-2xl font-semibold leading-snug",
        body: "text-base leading-relaxed",
        small: "text-sm leading-normal",
        caption: "text-xs leading-normal",
    };
    return variants[props.variant];
});
</script>