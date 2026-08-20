<script setup lang="ts">
import { Breadcrumbs, Typography, Button, MovieRating } from "~/shared/ui";
</script>

<template>
    <Breadcrumbs title="Побег из Претории" />

    <div class="mt-6">
        <Typography variant="h1">
            Побег из Претории
        </Typography>

        <Typography
            variant="body"
            class="mt-1 text-[25px]"
        >
            Escape from Pretoria
        </Typography>

        <div class="mt-4 flex items-center gap-[13px]">
            <MovieRating
                :value="8.7"
                label="Kinoarea"
            />

            <MovieRating
                :value="4.7"
                label="IMDb"
            />
        </div>

        <Typography
            variant="body"
            class="mt-4 max-w-[850px] text-[20px] leading-[1.4]"
        >
            Двое борцов за свободу отбывают срок в одной из самых строгих
            тюрем мира — в «Претории». Вместе с другими узниками они планируют
            дерзкий и опасный побег. Но придумать план — это только первый шаг.
            Шаг второй — реализация плана.
        </Typography>

        <div class="mt-7.5 flex items-center gap-9.25">
            <Button
                variant="outline"
                class="h-[71px]"
            >
                <Icon
                    name="lucide:play"
                    class="size-9"
                />

                <Typography
                    variant="body"
                    class="pl-3 text-[18px]"
                >
                    Смотреть трейлер
                </Typography>
            </Button>

            <div class="flex items-center gap-6">
                <Icon name="simple-icons:vk" class="size-5 text-white" />
                <Icon name="lucide:instagram" class="size-5 text-white" />
                <Icon name="lucide:facebook" class="size-5 text-white" />
                <Icon name="simple-icons:twitter" class="size-5 text-white" />
                <Icon name="lucide:more-horizontal" class="size-5 text-white" />
            </div>
        </div>
    </div>
</template>