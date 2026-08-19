<script setup lang="ts">
import { Button, Logo, Typography, Input } from "~/shared/ui";
</script>

<template>
    <footer class="relative z-10 mt-16.25 w-full bg-(--footer-bg) px-0 py-7.5">
        <div class="relative mx-auto max-w-357.5">
            <div
                class="relative h-125 w-full overflow-hidden rounded-[10px] bg-[url('/images/footer-cover.png')] bg-cover bg-center bg-no-repeat"
            >
                <div class="absolute inset-0 bg-(--footer-bg-cover)" />

                <div class="relative flex h-full items-center justify-center">
                    <div class="w-200 grid gap-6.5 justify-items-center">
                        <Logo variant="white" />
                        <Typography variant="h2" class="text-[50px]">
                            Подпишитесь на E-mail рассылку
                        </Typography>
                        <Typography
                            variant="body"
                            class="text-[22px] text-center"
                        >
                            Если хотиет быть в курсе последних новостей и
                            новинок кино - заполните форму ниже и оформите
                            бесплатную E-mail рассылку!
                        </Typography>
                        <div class="w-full flex gap-2">
                            <Input
                                placeholder="Введите свой E-mail адрес"
                                variant="default"
                            />
                            <Button
                                variant="filled"
                                class="bg-(--primary-yellow) text-(--primary-black)"
                                >Подписаться</Button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
