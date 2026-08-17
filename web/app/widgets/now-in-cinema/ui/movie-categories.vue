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
    <nav class="flex items-center gap-8">
        <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="
                text-[16px]
                font-bold
                transition-opacity
                hover:opacity-70
            "
            :class="
                activeCategory === category
                    ? 'text-(--primary-white)'
                    : 'text-white/40'
            "
            @click="emit('update:activeCategory', category)"
        >
            {{ category }}
        </button>
    </nav>
</template>