<script setup lang="ts">
defineProps<{
    src: string;
    alt: string;
}>();
</script>

<template>
    <div class="shrink-0">
        <img
            :src="src"
            :alt="alt"
            class="h-[600px] w-[400px] rounded-[10px] object-cover"
        >
    </div>
</template>