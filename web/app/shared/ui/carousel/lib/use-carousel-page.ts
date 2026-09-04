import { ref, watch } from "vue";

export function useCarouselPage(
    initialPage: number,
    totalPages: number,
) {
    const activePage = ref(initialPage);

    watch(
        () => initialPage,
        (value) => {
            if (value !== activePage.value) {
                activePage.value = value;
            }
        },
    );

    const setPage = (page: number) => {
        activePage.value = Math.min(
            Math.max(1, page),
            totalPages,
        );
    };

    const goToPrev = () => {
        if (activePage.value > 1) {
            setPage(activePage.value - 1);
            return true;
        }
        return false;
    };

    const goToNext = () => {
        if (activePage.value < totalPages) {
            setPage(activePage.value + 1);
            return true;
        }
        return false;
    };

    return {
        activePage,
        setPage,
        goToPrev,
        goToNext,
    };
}