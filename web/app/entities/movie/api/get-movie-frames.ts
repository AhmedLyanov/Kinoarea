import type {
    MovieFramesApiResponse,
} from "../model/frame-types";

export async function getMovieFrames(
    id: number,
): Promise<MovieFramesApiResponse> {
    return await $fetch<MovieFramesApiResponse>(
        `/api/movies/${id}/frames`,
    );
}