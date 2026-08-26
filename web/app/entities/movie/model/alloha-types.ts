export interface AllohaTranslation {
    name: string;
    iframe: string;
    quality: string | null;
    adv: boolean;
    date: string | null;
    uhd: boolean;
    lgbt: boolean;
}

export interface AllohaMovieResponse {
    status: string;

    data: {
        name: string;
        original_name: string | null;
        alternative_name: string | null;

        year: number;
        category: number;

        id_kp: number | null;
        alternative_id_kp: number | null;
        id_imdb: string | null;
        id_tmdb: number | null;
        id_world_art: number | null;

        country: string;
        genre: string;

        actors: string;
        directors: string;
        producers: string;

        premiere_ru: string | null;
        premiere: string | null;

        age_restrictions: number | null;
        rating_mpaa: string | null;

        rating_kp: number | null;
        rating_imdb: number | null;

        time: string | null;

        tagline: string | null;
        poster: string;
        description: string | null;

        quality: string | null;
        translation: string | null;

        translation_iframe: Record<string, AllohaTranslation>;

        iframe: string | null;
        iframe_trailer: string | null;

        lgbt: boolean;
        uhd: boolean;
        available_directors_cut: boolean;
    };
}