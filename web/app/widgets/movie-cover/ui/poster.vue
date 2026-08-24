<template>
    <div class="w-[404px] h-[559px] overflow-hidden rounded-[10px]">
        <img
            :src="src"
            :alt="alt"
            class="w-full h-full object-cover"
        />
    </div>
</template>

<script setup lang="ts">
interface Props {
    src: string;
    alt?: string;
}

withDefaults(defineProps<Props>(), {
    alt: "Постер фильма",
});
</script>