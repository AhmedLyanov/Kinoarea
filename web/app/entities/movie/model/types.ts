export interface Movie {
id: number;
title: string;
image: string;
rating: {
    imdb?: number;
    kinopoisk?: number;
};
genres: string[];
}