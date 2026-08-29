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
    | "outline"
    | "filled";

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
            "inline-flex h-[52px] w-[55px] items-center justify-center rounded-[10px] border transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 max-md:h-[44px] max-md:w-[46px] max-sm:h-[40px] max-sm:w-[42px]",

        login:
            "inline-flex h-[53px] w-[138px] items-center justify-center rounded-[10px] text-[16px] font-bold leading-none transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 max-md:h-[46px] max-md:w-[110px] max-md:text-[14px] max-sm:h-[40px] max-sm:w-auto max-sm:px-4 max-sm:text-[13px]",

        primary:
            "inline-flex items-center justify-center rounded-[10px] px-6 py-3 font-semibold transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 max-md:px-5 max-md:py-2.5 max-md:text-sm max-sm:px-4 max-sm:py-2 max-sm:text-sm",

        ghost:
            "inline-flex items-center justify-center font-semibold transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-50 max-md:text-sm max-sm:text-xs",

        outline:
            "inline-flex items-center justify-center rounded-[10px] border px-6 py-3 font-semibold transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 max-md:px-5 max-md:py-2.5 max-md:text-sm max-sm:px-4 max-sm:py-2 max-sm:text-sm",

        filled:
            "inline-flex items-center justify-center rounded-[10px] bg-(--primary-blue) px-[38px] py-[20px] font-semibold transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 max-md:px-6 max-md:py-3.5 max-md:text-sm max-sm:px-5 max-sm:py-3 max-sm:text-sm",
    };

    return variants[props.variant];
});
</script>