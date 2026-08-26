export interface Movie {
    id: number;

    title: string;
    originalTitle: string | null;

    type: "film" | "serial";

    age: string | null;
    quality: string | null;

    year: number;
    releaseDate: string | null;

    rating: {
        imdb: number | null;
        kinopoisk: number | null;
    };

    ids: {
        imdb: string | null;
        kinopoisk: string | null;
        worldArt: string | null;
    };

    poster: string;

    iframeUrl: string;
    trailerUrl: string | null;

    genres: string[];
    countries: string[];
    collections: string[];
}