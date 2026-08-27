import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
    state: () => ({
        isOpen: false,
    }),

    actions: {
        open() {
            this.isOpen = true;
        },

        close() {
            this.isOpen = false;
        },

        toggle() {
            this.isOpen = !this.isOpen;
        },
    },
});