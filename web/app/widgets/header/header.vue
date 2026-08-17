<script setup lang="ts">
import { Logo, Navigation } from "~/shared/ui";
</script>

<template>
    <header class="flex justify-between mt-3">
        <div>
            <Logo />

            <div class="mt-2.5 flex w-full gap-3">
                <Icon name="simple-icons:vk" class="text-white" />
                <Icon name="simple-icons:instagram" class="text-white" />
                <Icon name="simple-icons:facebook" class="text-white" />
                <Icon name="simple-icons:twitter" class="text-white" />
            </div>
        </div>

        <Navigation />
    </header>
</template>
