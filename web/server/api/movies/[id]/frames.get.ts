import type {
    MovieFramesApiResponse,
} from "~/entities/movie/model/frame-types";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const id = getRouterParam(event, "id");

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: "Movie ID is required",
        });
    }

    if (!config.kinopoiskApiToken) {
        throw createError({
            statusCode: 500,
            statusMessage: "Kinopoisk API token is not configured",
        });
    }

    try {
        const response = await $fetch<MovieFramesApiResponse>(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images`,
            {
                query: {
                    type: "STILL",
                    page: 1,
                },

                headers: {
                    "X-API-KEY": config.kinopoiskApiToken,
                },
            },
        );

        return response;
    } catch (error) {
        console.error("Failed to fetch movie frames:", error);

        throw createError({
            statusCode: 502,
            statusMessage: "Failed to fetch movie frames",
        });
    }
});