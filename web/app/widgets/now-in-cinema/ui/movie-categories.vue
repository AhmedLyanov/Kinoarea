<script setup lang="ts">
defineProps<{
    categories: string[];
    activeCategory: string;
}>();

const emit = defineEmits<{
    "update:activeCategory": [category: string];
}>();
</script>

<template>
    <div class="flex items-center gap-8">
        <Typography
            v-for="category in categories"
            :key="category"
            variant="body"
            class="cursor-pointer font-bold text-(--primary-white)"
            :class="
                activeCategory === category
                    ? 'text-(--primary-white)'
                    : 'text-white/40'
            "
            @click="emit('update:activeCategory', category)"
        >
            {{ category }}
        </Typography>
    </div>
</template>