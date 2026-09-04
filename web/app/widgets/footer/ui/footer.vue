<script setup lang="ts">
import {
    Button,
    Logo,
    Typography,
    Input,
    Navigation,
} from "~/shared/ui";
</script>

<template>
    <footer
        class="
            relative
            z-10
            mt-16.25
            w-full
            px-[29px]
            py-7.5

            min-[760px]:px-[54px]

            xl:px-0
        "
    >
        <div
            class="
                relative
                mx-auto
                w-full
                max-w-357.5
            "
        >
            <div
                class="
                    relative
                    w-full
                    overflow-hidden
                    rounded-[10px]
                    bg-[url('/images/footer-cover.png')]
                    bg-cover
                    bg-center
                    bg-no-repeat

                    h-auto
                    min-h-[504px]

                    xl:h-125
                    xl:min-h-0
                "
            >
                <div
                    class="
                        absolute
                        inset-0
                        bg-(--footer-bg-cover)
                    "
                />

                <div
                    class="
                        relative
                        flex
                        min-h-[504px]
                        items-center
                        justify-center
                        px-6
                        py-10

                        xl:h-full
                        xl:min-h-0
                        xl:px-0
                        xl:py-0
                    "
                >
                    <div
                        class="
                            grid
                            w-full
                            max-w-[570px]
                            justify-items-center
                            gap-5

                            xl:max-w-200
                            xl:gap-6.5
                        "
                    >
                        <!-- Logo -->
                        <Logo
                            variant="white"
                            class="
                                w-auto
                            "
                        />

                        <!-- Title -->
                        <Typography
                            variant="h2"
                            class="
                                max-w-[400px]
                                text-center
                                text-[28px]
                                leading-[115%]

                                min-[760px]:text-[36px]

                                xl:max-w-none
                                xl:text-[50px]
                                xl:leading-normal
                            "
                        >
                            Подпишитесь на E-mail рассылку
                        </Typography>

                        <!-- Description -->
                        <Typography
                            variant="body"
                            class="
                                max-w-[390px]
                                text-center
                                text-[16px]
                                leading-[150%]

                                min-[760px]:max-w-[520px]
                                min-[760px]:text-[18px]

                                xl:max-w-none
                                xl:text-[22px]
                                xl:leading-normal
                            "
                        >
                            Если хотите быть в курсе последних новостей и
                            новинок кино - заполните форму ниже и оформите
                            бесплатную E-mail рассылку!
                        </Typography>

                        <!-- Form -->
                        <div
                            class="
                                flex
                                w-full
                                flex-col
                                gap-2

                                xl:flex-row
                            "
                        >
                            <Input
                                placeholder="Введите свой E-mail адрес"
                                variant="default"
                                class="
                                    h-[68px]
                                    w-full

                                    xl:h-[68px]
                                "
                            />

                            <Button
                                variant="filled"
                                class="
                                    h-[68px]
                                    w-full
                                    shrink-0
                                    bg-(--primary-yellow)
                                    text-(--primary-black)

                                    xl:w-[174px]
                                "
                            >
                                Подписаться
                            </Button>
                        </div>

                        <!-- Agreement -->
                        <label
                            class="
                                flex
                                max-w-[400px]
                                cursor-pointer
                                items-start
                                justify-center
                                gap-3
                                text-center
                            "
                        >
                            <input
                                type="checkbox"
                                checked
                                class="
                                    mt-1
                                    size-[18px]
                                    shrink-0
                                    accent-(--primary-yellow)
                                "
                            >

                            <Typography
                                variant="body"
                                class="
                                    text-[16px]
                                    leading-[140%]
                                "
                            >
                                Соглашаюсь на условия
                                <span
                                    class="
                                        text-(--primary-yellow)
                                        underline
                                    "
                                >
                                    политики конфиденциальности
                                </span>
                            </Typography>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Footer bottom -->
            <div
                class="
                    mt-10
                    flex
                    flex-col
                    items-center
                    gap-8

                    min-[760px]:mt-12

                    xl:mt-15.25
                    xl:gap-8.5
                "
            >
                <!-- Socials -->
                <div
                    class="
                        flex
                        items-center
                        justify-center
                        gap-9
                    "
                >
                    <Icon
                        name="simple-icons:vk"
                        class="text-[#3C4767]"
                    />

                    <Icon
                        name="simple-icons:instagram"
                        class="text-[#3C4767]"
                    />

                    <Icon
                        name="simple-icons:facebook"
                        class="text-[#3C4767]"
                    />

                    <Icon
                        name="simple-icons:twitter"
                        class="text-[#3C4767]"
                    />

                    <Icon
                        name="simple-icons:youtube"
                        class="text-[#3C4767]"
                    />
                </div>

                <!-- Navigation -->
                <div
                    class="
                        flex
                        w-full
                        justify-center

                        [&_nav]:w-full
                        [&_ul]:flex
                        [&_ul]:flex-col
                        [&_ul]:items-center
                        [&_ul]:gap-5

                        xl:[&_nav]:w-auto
                        xl:[&_ul]:flex-row
                        xl:[&_ul]:gap-10
                    "
                >
                    <Navigation />
                </div>

                <!-- Copyright -->
                <div
                    class="
                        flex
                        flex-col
                        items-center
                        gap-4
                        text-center

                        xl:gap-6.5
                    "
                >
                    <Typography
                        variant="body"
                        class="text-(--footer-meta)"
                    >
                        2020 © Kinoarea. Все права защищены
                    </Typography>

                    <Typography
                        variant="body"
                        class="
                            text-(--footer-meta)
                            underline
                        "
                    >
                        Политика конфиденциальности
                    </Typography>
                </div>
            </div>
        </div>
    </footer>
</template>
