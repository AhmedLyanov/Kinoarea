<script setup lang="ts">
import { Button, Input, Logo, Typography } from "~/shared/ui";
import { useSearchStore } from "~/stores/search";

const searchStore = useSearchStore();
</script>

<template>
    <div
        class="
            fixed
            inset-0
            z-50
            overflow-y-auto
            bg-black/60
            px-6
            py-8
        "
        @click.self="searchStore.close()"
    >
        <div
            class="
                mx-auto
                flex
                min-h-full
                w-full
                max-w-[1088px]
                flex-col
            "
        >
            <div class="flex justify-center">
                <Logo />
            </div>

            <div class="mt-[77px]">
                <div class="flex items-center justify-center gap-5">
                    <div
                        class="
                            flex
                            h-[71px]
                            w-[815px]
                            shrink-0
                            items-center
                            rounded-[16px]
                            bg-(--primary-white)
                            p-2
                        "
                    >
                        <Input
                            placeholder="Название фильма"
                            class="
                                h-full
                                flex-1
                                border-none
                                bg-transparent
                                px-8
                                text-[20px]
                                text-(--primary-darkblue)
                                outline-none
                            "
                        />

                        <Button
                            variant="search"
                            class="
                                h-[55px]
                                w-[60px]
                                shrink-0
                                rounded-[14px]
                                border-none
                                bg-(--primary-yellow)
                                text-(--primary-darkblue)
                            "
                        >
                            <Icon
                                name="lucide:search"
                                class="size-[28px]"
                            />
                        </Button>
                    </div>

                    <Button
                        variant="ghost"
                        class="
                            flex
                            size-[40px]
                            shrink-0
                            items-center
                            justify-center
                            text-white
                        "
                        @click="searchStore.close()"
                    >
                        <Icon
                            name="lucide:x"
                            class="size-[20px]"

                        />
                    </Button>
                </div>

                <div class="mt-3">
                    <Typography
                        variant="h2"
                        class="
                            mb-3
                            text-[28px]
                            font-semibold
                            leading-none
                            text-white
                        "
                    >
                        Фильмы
                    </Typography>
                </div>
            </div>
        </div>
    </div>
</template>