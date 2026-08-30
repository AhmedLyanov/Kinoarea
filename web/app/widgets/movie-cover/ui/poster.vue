<script setup lang="ts">
defineProps<{
    src: string;
    alt: string;
}>();
</script>

<template>
    <div class="shrink-0">
        <NuxtImg
            :src="src"
            :alt="alt"
            class="
                h-[310px]
                w-[230px]
                rounded-[10px]
                object-cover

                md:h-[387px]
                md:w-[291px]

                lg:h-[600px]
                lg:w-[400px]
            "
        />
    </div>
</template>