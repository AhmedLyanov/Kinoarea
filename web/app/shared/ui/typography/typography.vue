<template>
  <component
    :is="tag"
    :class="classes"
  >
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
    h1: "text-4xl font-bold leading-tight",
    h2: "text-3xl font-bold leading-tight",
    h3: "text-2xl font-semibold leading-snug",
    body: "text-base font-normal leading-relaxed",
    small: "text-sm font-normal leading-normal",
    caption: "text-xs font-normal leading-normal",
  };

  return variants[props.variant];
});
</script>