import type { Movie } from "./types";

interface ApiMovie {
    id: number;
    name: string;
    origin_name: string;
    year: number;
    age: string | null;
    quality: string | null;
    imdb: string | null;
    kinopoisk: string | null;
    poster: string | null;
    trailer: string | null;
    iframe_url: string | null;
}

interface MoviesResponse {
    results: ApiMovie[];
}

export async function showMovie(id: string | number): Promise<Movie> {
    const config = useRuntimeConfig();

    const response = await $fetch<MoviesResponse>("/list", {
        baseURL: config.apiUrl,
        query: {
            token: config.apiToken,
            limit: 100,
            page: 1,
        },
    });

    const movie = response.results.find(
        (item) => String(item.id) === String(id),
    );

    if (!movie) {
        throw createError({
            statusCode: 404,
            statusMessage: "Movie not found",
        });
    }

    return {
        id: movie.id,
        title: movie.name,
        originalTitle: movie.origin_name,
        year: movie.year,
        age: movie.age,
        quality: movie.quality,
        rating: {
            imdb: movie.imdb !== null ? Number(movie.imdb) : null,
            kinopoisk:
                movie.kinopoisk !== null
                    ? Number(movie.kinopoisk)
                    : null,
        },
        image: movie.poster,
        trailer: movie.trailer,
        iframeUrl: movie.iframe_url,
    };
}