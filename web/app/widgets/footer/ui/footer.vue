<script setup lang="ts">
import { Button, Logo, Typography, Input, Navigation } from "~/shared/ui";
</script>

<template>
    <footer class="relative z-10 mt-16.25 w-full bg-(--footer-bg) px-0 py-7.5">
        <div class="relative mx-auto max-w-357.5">
            <div
                class="relative h-125 w-full overflow-hidden rounded-[10px] bg-[url('/images/footer-cover.png')] bg-cover bg-center bg-no-repeat"
            >
                <div class="absolute inset-0 bg-(--footer-bg-cover)" />

                <div class="relative flex h-full items-center justify-center">
                    <div class="grid w-200 justify-items-center gap-6.5">
                        <Logo variant="white" />

                        <Typography variant="h2" class="text-[50px]">
                            Подпишитесь на E-mail рассылку
                        </Typography>

                        <Typography
                            variant="body"
                            class="text-center text-[22px]"
                        >
                            Если хотиет быть в курсе последних новостей и
                            новинок кино - заполните форму ниже и оформите
                            бесплатную E-mail рассылку!
                        </Typography>

                        <div class="flex w-full gap-2">
                            <Input
                                placeholder="Введите свой E-mail адрес"
                                variant="default"
                            />

                            <Button
                                variant="filled"
                                class="bg-(--primary-yellow) text-(--primary-black)"
                            >
                                Подписаться
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-15.25 flex flex-col items-center gap-8.5">
                <div class="flex items-center justify-center gap-10">
                    <Icon name="simple-icons:vk" class="text-[#3C4767]" />
                    <Icon
                        name="simple-icons:instagram"
                        class="text-[#3C4767]"
                    />
                    <Icon
                        name="simple-icons:facebook"
                        class="text-[#3C4767]"
                    />
                    <Icon name="simple-icons:twitter" class="text-[#3C4767]" />
                    <Icon name="simple-icons:youtube" class="text-[#3C4767]" />
                </div>

                <Navigation />

                <div class="flex flex-col items-center gap-6.5 text-center">
                    <Typography
                        variant="body"
                        class="text-(--footer-meta)"
                    >
                        2020 © Kinoarea. Все права защищены
                    </Typography>

                    <Typography
                        variant="body"
                        class="text-(--footer-meta) underline"
                    >
                        Политика конфиденциальности
                    </Typography>
                </div>
            </div>
        </div>
    </footer>
</template>