export async function getMovies() {
    const config = useRuntimeConfig();

    return await $fetch("/list", {
        baseURL: config.apiUrl,
        query: {
            token: config.apiToken,
        },
    });
}