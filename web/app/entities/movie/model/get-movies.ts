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
    genre: Record<string, string> | null;
    country: Record<string, string> | null;
}

interface MoviesResponse {
    total: number;
    prev_page: string | null;
    next_page: string | null;
    results: ApiMovie[];
}

export default defineEventHandler(async () => {
    const config = useRuntimeConfig();

    const response = await $fetch<MoviesResponse>("/list", {
        baseURL: config.apiUrl,
        query: {
            token: config.apiToken,
            limit: 100,
            page: 1,
        },
    });

    return {
        ...response,

        results: response.results.map((movie) => ({
            id: movie.id,
            title: movie.name,
            originalTitle: movie.origin_name,
            year: movie.year,
            age: movie.age,
            quality: movie.quality ?? "",
            rating: {
                imdb: movie.imdb,
                kinopoisk: movie.kinopoisk,
            },
            genres: Object.values(movie.genre ?? {}),
            countries: Object.values(movie.country ?? {}),
            image: movie.poster ?? "",
            trailer: movie.trailer,
            watchUrl: movie.iframe_url ?? "",
        })),
    };
});