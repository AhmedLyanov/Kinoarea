<script setup lang="ts">
import { ref } from "vue";
import { Logo, Navigation, Button } from "~/shared/ui";
import { useSearchStore } from "~/stores/search";
import MobileMenu from "./ui/mobile-menu.vue";

const searchStore = useSearchStore();
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<template>
    <header class="container mt-3 flex justify-between px-[29px] min-[760px]:px-[54px] xl:px-0">
        <div class="hidden md:block">
            <Logo />

            <div class="mt-2.5 flex w-full gap-3">
                <Icon name="simple-icons:vk" class="text-white" />
                <Icon name="simple-icons:instagram" class="text-white" />
                <Icon name="simple-icons:facebook" class="text-white" />
                <Icon name="simple-icons:twitter" class="text-white" />
            </div>
        </div>

        <div class="hidden md:flex">
            <Navigation />
        </div>

        <div class="hidden items-center gap-3 md:flex">
            <Button variant="search" class="border-(--primary-white) bg-(--primary-white) text-(--primary-blue)"
                @click="searchStore.open()">
                <Icon name="lucide:search" class="size-8" />
            </Button>

            <Button variant="login"
                class="bg-(--primary-blue) text-(--primary-white) shadow-[0_0_30px_var(--primary-blue)]">
                Войти
            </Button>
        </div>

        <div class="flex w-full items-center justify-between md:hidden">
            <div class="flex items-center gap-2">
                <Button variant="search" class="border-(--primary-white) bg-(--primary-white) text-(--primary-blue)"
                    @click="searchStore.open()">
                    <Icon name="lucide:search" class="size-5" />
                </Button>

                <Button variant="search" @click="toggleMenu">
                    <Icon name="lucide:menu" class="size-6" />
                </Button>
            </div>

            <div class="flex flex-col items-center">
                <Logo />

                <div class="mt-2.5 flex gap-3">
                    <Icon name="simple-icons:vk" class="text-white" />
                    <Icon name="simple-icons:instagram" class="text-white" />
                    <Icon name="simple-icons:facebook" class="text-white" />
                    <Icon name="simple-icons:twitter" class="text-white" />
                </div>
            </div>

            <Button variant="login"
                class="bg-(--primary-blue) text-(--primary-white) shadow-[0_0_30px_var(--primary-blue)]">
                Войти
            </Button>
        </div>

        <MobileMenu :is-open="isMenuOpen" @close="closeMenu" />
    </header>
</template>