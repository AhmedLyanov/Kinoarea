<template>
    <component
        :is="tag"
        :type="tag === 'button' ? type : undefined"
        :class="[buttonClasses, $attrs.class]"
        :disabled="disabled"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonVariant =
    | "search"
    | "login"
    | "primary"
    | "ghost"
    | "outline";

interface Props {
    tag?: "button" | "a";
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "button",
    type: "button",
    variant: "primary",
    disabled: false,
});

const buttonClasses = computed(() => {
    const variants: Record<ButtonVariant, string> = {
        search:
            "inline-flex h-[52px] w-[55px] items-center justify-center rounded-[10px] border transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50",

        login:
            "inline-flex h-[53px] w-[138px] items-center justify-center rounded-[10px] text-[16px] font-bold leading-none transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",

        primary:
            "inline-flex items-center justify-center rounded-[10px] px-6 py-3 font-semibold transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50",

        ghost:
            "inline-flex items-center justify-center font-semibold transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-50",

        outline:
            "inline-flex items-center justify-center rounded-[10px] border px-6 py-3 font-semibold transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50",
    };

    return variants[props.variant];
});
</script>