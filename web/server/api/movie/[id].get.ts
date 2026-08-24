import { showMovie } from "~/entities/movie/model/show-movie";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "id");

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: "Movie ID is required",
        });
    }

    return await showMovie(id);
});