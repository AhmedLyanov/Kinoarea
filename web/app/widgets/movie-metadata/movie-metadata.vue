<template>
    <section class="grid grid-cols-2 gap-x-[90px] gap-y-5">
        <div
            v-for="item in leftMetadata"
            :key="item.label"
            class="grid grid-cols-[180px_1fr] items-center"
        >
            <span class="text-[20px] font-medium text-white">
                {{ item.label }}:
            </span>

            <span
                class="text-[20px] leading-[1.4] text-(--primary-yellow)"
            >
                {{ item.value }}
            </span>
        </div>

        <div
            v-for="item in rightMetadata"
            :key="item.label"
            class="grid grid-cols-[250px_1fr] items-center"
        >
            <span class="text-[20px] font-medium text-white">
                {{ item.label }}:
            </span>

            <span
                class="text-[20px] leading-[1.4] text-(--primary-yellow)"
            >
                {{ item.value }}
            </span>
        </div>
    </section>
</template>

<script setup lang="ts">
const leftMetadata = [
    {
        label: "Год",
        value: "2020",
    },
    {
        label: "Страна",
        value: "Великобритания, Австралия",
    },
    {
        label: "Слоган",
        value: "«Подбери ключ к свободе»",
    },
    {
        label: "Режиссер",
        value: "Фрэнсис Аннан",
    },
    {
        label: "Сценарий",
        value: "Фрэнсис Аннан, Л.Х. Адамс, Кэрол Гриффитс, ...",
    },
    {
        label: "Продюсер",
        value: "Дэвид Баррон, Марк Блейни, Гари Хэмилтон, ...",
    },
    {
        label: "Оператор",
        value: "Джеффри Холл",
    },
    {
        label: "Композитор",
        value: "Дэвид Хиршфелдер",
    },
];

const rightMetadata = [
    {
        label: "Художник",
        value: "Скотт Бёрд, Эрика Брайан, Мариот Керр, ...",
    },
    {
        label: "Монтаж",
        value: "Ник Фентон",
    },
    {
        label: "Жанр",
        value: "Триллер, ...",
    },
    {
        label: "Сборы в мире",
        value: "$12 808",
    },
    {
        label: "Премьера (мир)",
        value: "1 марта 2020",
    },
    {
        label: "Премьера (РФ)",
        value: "14 мая 2020",
    },
    {
        label: "Возраст",
        value: "16+",
    },
    {
        label: "Время",
        value: "106 мин. / 01:46",
    },
];
</script>