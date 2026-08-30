<script setup lang="ts">
import { Typography } from "~/shared/ui";
import { navigationItems } from "../model/links";
</script>

<template>
    <nav
        class="
            flex
            flex-col
            items-center
            gap-3

            md:flex-row
            md:items-center
            md:gap-4

            lg:gap-6
            xl:gap-10
        "
    >
        <NuxtLink
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.to"
            class="whitespace-nowrap transition-opacity hover:opacity-70"
        >
            <Typography
                variant="body"
                class="
                    text-xs
                    font-bold
                    text-(--primary-white)

                    md:text-sm
                    lg:text-base
                "
            >
                {{ item.label }}
            </Typography>
        </NuxtLink>
    </nav>
</template>