<script setup lang="ts">
defineProps<{
    years: string[];
    activeYear: string;
}>();

const emit = defineEmits<{
    "update:activeYear": [year: string];
}>();
</script>

<template>
    <div class="flex items-center gap-8">
        <Typography
            v-for="year in years"
            :key="year"
            variant="body"
            class="font-bold text-(--primary-white) cursor-pointer transition-colors duration-200"
            :class="
                activeYear === year
                    ? 'text-(--primary-white)'
                    : 'text-white/40 hover:text-white/70'
            "
            @click="emit('update:activeYear', year)"
        >
            {{ year }}
        </Typography>
    </div>
</template>