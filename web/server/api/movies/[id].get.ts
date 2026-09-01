import type { AllohaMovieResponse } from "~/entities/movie/model/mappers";
import { mapAllohaMovie } from "~/entities/movie/model/mappers";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const id = getRouterParam(event, "id");

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: "Movie ID is required",
        });
    }

    const response = await $fetch<string>(config.allohaApiUrl, {
        query: {
            token: config.allohaApiToken,
            kp: id,
        },
    });

    const data: AllohaMovieResponse = JSON.parse(response);

    if (!data.data) {
        throw createError({
            statusCode: 404,
            statusMessage: "Movie details not found",
            data: {
                code: "MOVIE_NOT_AVAILABLE",
                message: "Информация о фильме пока недоступна",
            },
        });
    }

    return mapAllohaMovie(data);
});