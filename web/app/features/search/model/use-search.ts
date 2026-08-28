import type { MovieSearchResult } from "~/entities/movie";

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

export const useSearch = () => {
  const results = ref<MovieSearchResult[]>([]);
  const pending = ref(false);
  const error = ref<string | null>(null);

  const search = async (query: string) => {
    const name = query.trim();

    if (!name) {
      results.value = [];
      error.value = null;
      return;
    }

    pending.value = true;
    error.value = null;

    try {
      const response = await $fetch<BhceshSearchResponse>(
        "/api/movies/search",
        {
          params: {
            name,
          },
        },
      );

      if (!response.results?.length) {
        results.value = [];
        error.value = "Фильмы не найдены";
        return;
      }

      results.value = response.results
        .filter((movie) => movie.kinopoisk_id)
        .map((movie) => ({
          id: movie.id,
          kinopoiskId: movie.kinopoisk_id!,
          title: movie.name,
          originalTitle: movie.origin_name,
          poster: movie.poster,
          genres: Object.values(movie.genre ?? {}),
          rating: {
            kinopoisk: movie.kinopoisk ? Number(movie.kinopoisk) : null,
          },
        }));

    } catch (err) {
      console.error("SEARCH ERROR:", err);

      results.value = [];
      error.value = "Не удалось выполнить поиск";
    } finally {
      pending.value = false;
    }
  };

  return {
    results,
    pending,
    error,
    search,
  };
};
