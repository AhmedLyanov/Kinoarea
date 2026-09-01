export default defineEventHandler(async () => {
    const config = useRuntimeConfig();

    return await $fetch("/list", {
        baseURL: config.bhceshApiUrl,
        query: {

            token: config.bhceshToken,
            sort: "-views",
            type: "serials",
            limit: 50,
            year: 2026,
        },
    });
});