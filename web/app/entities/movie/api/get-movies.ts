import type { Movie } from "../model/types";
import type { MovieApiResponse } from "../model/mappers";
import { mapMovie } from "../model/mappers";

interface MoviesApiResponse {
    total: number;
    prev_page: string | null;
    next_page: string | null;
    results: MovieApiResponse[];
}

export async function getNewMovies(): Promise<Movie[]> {
    const response = await $fetch<MoviesApiResponse>("/api/movies/new");

    console.log("NEW MOVIES:", response);

    return response.results.map(mapMovie);
}
export async function getPopularMovies(): Promise<Movie[]> {
    const response = await $fetch<MoviesApiResponse>("/api/movies/popular");

    return response.results.map(mapMovie);
}