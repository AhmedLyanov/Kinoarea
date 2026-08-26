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

    iframe_url: string | null;
    trailer: string | null;
    poster: string;

    genre: Record<string, string>;
    country: Record<string, string>;
    collection?: Record<string, string>;
}
