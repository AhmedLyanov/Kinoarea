import { ref,  onUnmounted } from "vue";

export function useCarouselScroll(
    carouselRef: Ref<HTMLElement | null>,
    orientation: "horizontal" | "vertical",
) {
    const isScrolling = ref(false);
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const getPageSize = () => {
        if (!carouselRef.value) return 0;
        return orientation === "vertical"
            ? carouselRef.value.clientHeight
            : carouselRef.value.clientWidth;
    };

    const getScrollPosition = () => {
        if (!carouselRef.value) return 0;
        return orientation === "vertical"
            ? carouselRef.value.scrollTop
            : carouselRef.value.scrollLeft;
    };

    const scrollToPage = (page: number) => {
        if (!carouselRef.value) return;

        const targetPosition = (page - 1) * getPageSize();

        carouselRef.value.scrollTo({
            [orientation === "vertical" ? "top" : "left"]: targetPosition,
            behavior: "smooth",
        });
    };

    const lockScroll = () => {
        isScrolling.value = true;
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling.value = false;
        }, 500);
    };

    const unlockScroll = () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        isScrolling.value = false;
    };

    onUnmounted(() => {
        unlockScroll();
    });

    return {
        isScrolling,
        getPageSize,
        getScrollPosition,
        scrollToPage,
        lockScroll,
        unlockScroll,
    };
}