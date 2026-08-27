export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const name = String(query.name ?? "").trim();

    if (!name) {
        throw createError({
            statusCode: 400,
            statusMessage: "Название фильма не указано",
        });
    }

    const config = useRuntimeConfig();

    return await $fetch(config.allohaApiUrl, {
        params: {
            token: config.allohaApiToken,
            name,
        },
    });
});