<script setup lang="ts">
import { Logo, Navigation, Button } from "~/shared/ui";
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
        <div class="flex gap-3">
            <Button
                variant="search"
                class="border-(--primary-white) bg-(--primary-white) text-(--primary-blue)"
            >
                <Icon name="lucide:search" class="size-8" />
            </Button>
            <Button
                variant="login"
                class="bg-(--primary-blue) text-(--primary-white) shadow-[0_0_30px_var(--primary-blue)]"
            >
                Войти
            </Button>
        </div>
    </header>
</template>
