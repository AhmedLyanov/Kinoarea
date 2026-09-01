<template>
    <UApp>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>

    <Search v-if="searchStore.isOpen" />
</template>

<script setup lang="ts">
import { Search } from "~/features";
import { useSearchStore } from "~/stores/search";

const searchStore = useSearchStore();
const router = useRouter();

const METRIKA_ID = 112070833;

useHead({
    title: "Kinoarea",
});

onMounted(() => {
    type YandexMetrika = {
        (...args: unknown[]): void;
        a?: unknown[][];
    };

    const win = window as typeof window & {
        ym?: YandexMetrika;
    };

    win.ym =
        win.ym ||
        Object.assign(
            (...args: unknown[]) => {
                win.ym!.a = win.ym!.a || [];
                win.ym!.a.push(args);
            },
            { a: [] },
        );

    const script = document.createElement("script");

    script.src = "https://mc.yandex.ru/metrika/tag.js";
    script.async = true;

    document.head.appendChild(script);

    win.ym(METRIKA_ID, "init", {
        defer: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
    });

    win.ym(METRIKA_ID, "hit", window.location.href);

    router.afterEach((to) => {
        win.ym?.(METRIKA_ID, "hit", window.location.origin + to.fullPath);
    });
});
</script>
