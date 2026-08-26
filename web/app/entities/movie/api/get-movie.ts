import type { Movie } from "../model/types";

export async function getMovie(id: string): Promise<Movie> {
    return await $fetch<Movie>(`/api/movies/${id}`);
}