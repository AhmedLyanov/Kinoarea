export const useMovieNavigation = () => {
    const toast = useToast();

    const openMovie = async (id: number | string) => {
        try {
            await $fetch(`/api/movies/${id}`);

            await navigateTo(`/watch/${id}`);
        } catch (error) {
            if (
                error &&
                typeof error === "object" &&
                "statusCode" in error &&
                error.statusCode === 404
            ) {
                toast.add({
                    title: "Фильм пока недоступен",
                    description: "Этот фильм ещё не добавлен в нашу базу.",
                    color: "warning",
                    icon: "i-lucide-circle-alert",
                });

                return;
            }

            toast.add({
                title: "Ошибка",
                description: "Не удалось открыть фильм.",
                color: "error",
                icon: "i-lucide-circle-alert",
            });
        }
    };

    return {
        openMovie,
    };
};