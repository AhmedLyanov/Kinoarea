import type { Movie } from "~/entities/movie";

interface ApiMovie {
    id: number;
    name: string;
    origin_name: string;
    year: number;
    age: string | null;
    quality: string;
    imdb: string | null;
    kinopoisk: string | null;
    poster: string;
    trailer: string | null;
    iframe_url: string;
    genre: Record<string, string>;
    country: Record<string, string>;
}

interface MoviesResponse {
    total: number;
    prev_page: string | null;
    next_page: string | null;
    results: ApiMovie[];
}

export async function getMovies() {
    const config = useRuntimeConfig();

    const response = await $fetch<MoviesResponse>("/list", {
        baseURL: config.apiUrl,
        query: {
            token: config.apiToken,
        },
    });

    return {
        total: response.total,
        prev_page: response.prev_page,
        next_page: response.next_page,
        results: response.results.map(
            (movie): Movie => ({
                id: movie.id,
                title: movie.name,
                originalTitle: movie.origin_name,
                year: movie.year,
                age: movie.age,
                quality: movie.quality,
                rating: {
                    imdb: movie.imdb,
                    kinopoisk: movie.kinopoisk,
                },
                genres: Object.values(movie.genre),
                countries: Object.values(movie.country),
                image: movie.poster,
                trailer: movie.trailer,
                watchUrl: movie.iframe_url,
            }),
        ),
    };
}