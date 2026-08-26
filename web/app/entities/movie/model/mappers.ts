import type { Movie } from "./types";

export interface MovieApiResponse {
    id: number;

    name: string;
    origin_name: string | null;

    type: "film" | "serial";

    age: string | null;
    quality: string | null;

    year: number;
    activate_time: string | null;

    imdb: string | null;
    imdb_id: string | null;

    kinopoisk: string | null;
    kinopoisk_id: string | null;

    world_art: string | null;
    world_art_id: string | null;

    iframe_url: string;
    trailer: string | null;
    poster: string;

    genre: Record<string, string>;
    country: Record<string, string>;
    collection?: Record<string, string>;
}

export function mapMovie(movie: MovieApiResponse): Movie {
    return {
        id: movie.id,

        title: movie.name,
        originalTitle: movie.origin_name,

        type: movie.type,

        age: movie.age,
        quality: movie.quality,

        year: movie.year,
        releaseDate: movie.activate_time,

        rating: {
            imdb: movie.imdb ? Number(movie.imdb) : null,
            kinopoisk: movie.kinopoisk
                ? Number(movie.kinopoisk)
                : null,
        },

        ids: {
            imdb: movie.imdb_id,
            kinopoisk: movie.kinopoisk_id,
            worldArt: movie.world_art_id,
        },

        poster: movie.poster,

        iframeUrl: movie.iframe_url,
        trailerUrl: movie.trailer,

        genres: Object.values(movie.genre),
        countries: Object.values(movie.country),
        collections: Object.values(movie.collection ?? {}),
    };
}