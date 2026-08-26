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
        tmdb: number | null;
    };

    poster: string;

    iframeUrl: string | null;
    trailerUrl: string | null;

    description: string | null;
    tagline: string | null;

    country: string[];
    genres: string[];

    actors: string[];
    directors: string[];
    producers: string[];

    duration: string | null;

    translations: MovieTranslation[];

    uhd: boolean;
    lgbt: boolean;
}

export interface MovieTranslation {
    id: string;

    name: string;
    iframe: string;

    quality: string | null;

    advertisement: boolean;
    date: string | null;

    uhd: boolean;
    lgbt: boolean;
}