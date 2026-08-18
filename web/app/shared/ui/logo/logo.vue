<script setup lang="ts">
withDefaults(
    defineProps<{
        variant?: "default" | "white";
    }>(),
    {
        variant: "default",
    },
);
</script>

<template>
    <div class="flex gap-[6px]">
        <img
            src="/icons/24/Cinema.svg"
            alt="Cinema"
            
        />

        <img
            :src="
                variant === 'white'
                    ? '/icons/24/Kinoarea-white.svg'
                    : '/icons/24/Kinoarea.svg'
            "
            alt="Kinoarea"
        />
    </div>
</template>