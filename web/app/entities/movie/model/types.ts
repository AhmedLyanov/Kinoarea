export interface Movie {
    id: number;
    title: string;
    originalTitle: string;
    year: number;
    age: string | null;
    quality: string;
    rating: {
        imdb: string | null;
        kinopoisk: string | null;
    }
    genres: string[];
    countries: string[];
    image: string;
    trailer: string | null;
    iframeUrl: string;
}