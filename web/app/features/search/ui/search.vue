<script setup lang="ts">
import { Button, Input, Logo, Typography } from "~/shared/ui";
import { useSearchStore } from "~/stores/search";
import { useSearch } from "~/features/search/model/use-search";
import MovieSearchCard from "~/entities/movie/ui/movie-search-card.vue";

const searchStore = useSearchStore();

const {
    results,
    pending,
    error,
    search,
} = useSearch();
</script>

<template>
    <div
        class="
            fixed
            inset-0
            z-50
            overflow-y-auto
            bg-black/60
            px-4
            py-6

            md:px-6
            md:py-8
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

            <div
                class="
                    mt-8

                    md:mt-[77px]
                "
            >
                <div
                    class="
                        flex
                        flex-col
                        items-center
                        gap-3

                        md:flex-row
                        md:justify-center
                        md:gap-5
                    "
                >
                    <div
                        class="
                            flex
                            h-[56px]
                            w-full
                            items-center
                            rounded-[14px]
                            bg-(--primary-white)
                            p-1.5

                            md:h-[71px]
                            md:w-[815px]
                            md:rounded-[16px]
                            md:p-2
                        "
                    >
                        <Input
                            v-model="searchStore.query"
                            placeholder="Название фильма"
                            class="
                                h-full
                                min-w-0
                                flex-1
                                border-none
                                bg-transparent
                                px-4
                                text-[16px]
                                text-(--primary-darkblue)
                                outline-none

                                md:px-8
                                md:text-[20px]
                            "
                            @keyup.enter="search(searchStore.query)"
                        />

                        <Button
                            variant="search"
                            class="
                                h-[44px]
                                w-[48px]
                                shrink-0
                                rounded-[11px]
                                border-none
                                bg-(--primary-yellow)
                                text-(--primary-darkblue)

                                md:h-[55px]
                                md:w-[60px]
                                md:rounded-[14px]
                            "
                            :disabled="pending"
                            @click="search(searchStore.query)"
                        >
                            <Icon
                                name="lucide:search"
                                class="size-5 md:size-[28px]"
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

                <div
                    class="
                        mt-8

                        md:mt-3
                    "
                >
                    <Typography
                        variant="h2"
                        class="
                            mb-4
                            text-[24px]
                            font-semibold
                            leading-none
                            text-white

                            md:mb-3
                            md:text-[28px]
                        "
                    >
                        Фильмы
                    </Typography>

                    <div
                        v-if="pending"
                        class="py-8 text-center"
                    >
                        <Typography
                            variant="body"
                            class="text-white"
                        >
                            Поиск...
                        </Typography>
                    </div>

                    <div
                        v-else-if="error"
                        class="py-8 text-center"
                    >
                        <Typography
                            variant="body"
                            class="text-white"
                        >
                            {{ error }}
                        </Typography>
                    </div>

                    <div
                        v-else-if="results.length"
                        class="mt-3 space-y-3"
                        @click="searchStore.close()"
                    >
                        <MovieSearchCard
                            v-for="movie in results"
                            :key="movie.id"
                            :movie="movie"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>