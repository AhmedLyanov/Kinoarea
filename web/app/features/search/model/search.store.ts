import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
    const isOpen = ref(false);
    const query = ref("");

    const open = () => {
        isOpen.value = true;
    };

    const close = () => {
        isOpen.value = false;
        query.value = "";
    };

    const toggle = () => {
        if (isOpen.value) {
            close();
        } else {
            open();
        }
    };

    return {
        isOpen,
        query,
        open,
        close,
        toggle,
    };
});