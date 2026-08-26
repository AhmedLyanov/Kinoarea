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

export interface AllohaMovieResponse {
    status: string;

    data: {
        name: string;
        original_name: string | null;

        year: number;

        id_kp: number;
        id_imdb: string | null;
        id_tmdb: number | null;
        id_world_art: string | null;

        country: string;
        genre: string;

        actors: string;
        directors: string;
        producers: string;

        premiere_ru: string | null;
        premiere: string | null;

        age_restrictions: number | null;

        rating_kp: number | null;
        rating_imdb: number | null;

        time: string | null;

        tagline: string | null;
        poster: string;
        description: string | null;

        quality: string | null;
        translation: string | null;

        translation_iframe: Record<
            string,
            {
                name: string;
                iframe: string;
                quality: string | null;
                adv: boolean;
                date: string | null;
                uhd: boolean;
                lgbt: boolean;
            }
        >;

        iframe: string | null;
        iframe_trailer: string | null;

        lgbt: boolean;
        uhd: boolean;
    };
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
            tmdb: null,
        },

        poster: movie.poster,

        iframeUrl: movie.iframe_url,
        trailerUrl: movie.trailer,

        description: null,
        tagline: null,

        country: Object.values(movie.country),
        genres: Object.values(movie.genre),

        actors: [],
        directors: [],
        producers: [],

        duration: null,

        translations: [],

        uhd: false,
        lgbt: false,
    };
}

export interface MovieDetailsApiResponse {
    name: string;
    original_name: string | null;

    year: number;

    id_kp: number;
    id_imdb: string | null;
    id_tmdb: number | null;
    id_world_art: string | null;

    country: string;
    genre: string;

    actors: string;
    directors: string;
    producers: string;

    age_restrictions: number | null;

    rating_kp: number | null;
    rating_imdb: number | null;

    time: string | null;

    tagline: string | null;
    poster: string;
    description: string | null;

    quality: string | null;

    iframe: string | null;
    iframe_trailer: string | null;

    lgbt: boolean;
    uhd: boolean;
}
export function mapMovieDetails(
    movie: MovieDetailsApiResponse,
): Movie {
    return {
        id: movie.id_kp,

        title: movie.name,
        originalTitle: movie.original_name,

        type: "film",

        age: movie.age_restrictions
            ? String(movie.age_restrictions)
            : null,

        quality: movie.quality,

        year: movie.year,
        releaseDate: null,

        rating: {
            imdb: movie.rating_imdb,
            kinopoisk: movie.rating_kp,
        },

        ids: {
            imdb: movie.id_imdb,
            kinopoisk: String(movie.id_kp),
            worldArt: movie.id_world_art,
            tmdb: movie.id_tmdb,
        },

        poster: movie.poster,

        iframeUrl: movie.iframe,
        trailerUrl: movie.iframe_trailer,

        description: movie.description,
        tagline: movie.tagline,

        country: movie.country
            .split(",")
            .map((item) => item.trim()),

        genres: movie.genre
            .split(",")
            .map((item) => item.trim()),

        actors: movie.actors
            .split(",")
            .map((item) => item.trim()),

        directors: movie.directors
            .split(",")
            .map((item) => item.trim()),

        producers: movie.producers
            .split(",")
            .map((item) => item.trim()),

        duration: movie.time,

        translations: [],

        uhd: movie.uhd,
        lgbt: movie.lgbt,
    };
}

export function mapAllohaMovie(
    response: AllohaMovieResponse,
): Movie {
    const movie = response.data;

    return {
        id: movie.id_kp,
        title: movie.name,
        originalTitle: movie.original_name,
        type: "film",

        age: movie.age_restrictions?.toString() ?? null,
        quality: movie.quality,

        year: movie.year,
        releaseDate: movie.premiere_ru ?? movie.premiere ?? null,

        rating: {
            imdb: movie.rating_imdb,
            kinopoisk: movie.rating_kp,
        },

        ids: {
            imdb: movie.id_imdb,
            kinopoisk: String(movie.id_kp),
            worldArt: movie.id_world_art,
            tmdb: movie.id_tmdb,
        },

        poster: movie.poster,

        iframeUrl: movie.iframe,
        trailerUrl: movie.iframe_trailer,

        description: movie.description,
        tagline: movie.tagline,

        country: movie.country
            ? movie.country.split(",").map((item) => item.trim())
            : [],

        genres: movie.genre
            ? movie.genre.split(",").map((item) => item.trim())
            : [],

        actors: movie.actors
            ? movie.actors.split(",").map((item) => item.trim())
            : [],

        directors: movie.directors
            ? movie.directors.split(",").map((item) => item.trim())
            : [],

        producers: movie.producers
            ? movie.producers.split(",").map((item) => item.trim())
            : [],

        duration: movie.time,

        translations: Object.entries(
            movie.translation_iframe ?? {},
        ).map(([id, translation]) => ({
            id,
            name: translation.name,
            iframe: translation.iframe,
            quality: translation.quality,
            advertisement: translation.adv,
            date: translation.date,
            uhd: translation.uhd,
            lgbt: translation.lgbt,
        })),

        uhd: movie.uhd,
        lgbt: movie.lgbt,
    };
}