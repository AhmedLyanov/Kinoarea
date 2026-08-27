import type { Movie } from "../model/types";

interface SearchMovieResponse {
    status: string;
    data: Movie;
}

export const searchMovie = async (
    name: string,
): Promise<Movie> => {
    const response = await $fetch<SearchMovieResponse>(
        "/api/movies/search",
        {
            params: {
                name,
            },
        },
    );

    return response.data;
};