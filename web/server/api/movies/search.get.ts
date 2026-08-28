interface BhceshMovie {
    id: number;
    name: string;
    type: string;

    age: string | null;
    quality: string | null;

    origin_name: string | null;
    year: number | null;

    imdb: string | null;
    imdb_id: string | null;

    kinopoisk: string | null;
    kinopoisk_id: string | null;

    world_art: string | null;
    world_art_id: string | null;

    iframe_url: string | null;
    trailer: string | null;

    poster: string | null;

    genre: Record<string, string>;
    country: Record<string, string>;
}

interface BhceshSearchResponse {
    total: number;
    prev_page: number | null;
    next_page: number | null;
    results: BhceshMovie[];
}

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const name = String(query.name ?? "").trim();

    if (!name) {
        throw createError({
            statusCode: 400,
            statusMessage: "Название фильма не указано",
        });
    }

    const config = useRuntimeConfig();


    try {
        const response = await $fetch<BhceshSearchResponse>(
            `${config.bhceshApiUrl}/list`,
            {
                params: {
                    token: config.bhceshToken,
                    name,
                },
            },
        );

        return response;
    } catch (error) {
        console.error(error);
        throw createError({
            statusCode: 502,
            statusMessage: "Не удалось выполнить поиск фильмов",
        });
    }
});