<script setup lang="ts">
import { Navigation, Logo } from "~/shared/ui";

defineProps<{
    isOpen: boolean;
}>();

const emit = defineEmits<{
    close: [];
}>();
</script>

<template>
    <Transition name="mobile-menu">
        <div
            v-if="isOpen"
            class="fixed inset-0 z-50 bg-(--mobile-menu)/95 md:hidden"
        >
            <div class="relative flex h-full flex-col items-center">
                <div class="flex w-full items-center justify-center pt-6">
                    <Logo />

                    <button
                        type="button"
                        class="absolute right-6 top-5"
                        @click="emit('close')"
                    >
                        <Icon
                            name="lucide:x"
                            class="size-8 text-(--primary-white)"
                        />
                    </button>
                </div>

                <Navigation
                    class="mt-10 flex-col gap-7"
                    @click="emit('close')"
                />
            </div>
        </div>
    </Transition>
</template>