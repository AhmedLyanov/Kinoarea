export default defineEventHandler(async () => {
    const config = useRuntimeConfig();

    return await $fetch("/list", {
        baseURL: config.bhceshApiUrl,
        query: {

            token: config.bhceshToken,
            sort: "-new",
            type: "films",
            limit: 50,
            year: 2026,
        },
    });
});