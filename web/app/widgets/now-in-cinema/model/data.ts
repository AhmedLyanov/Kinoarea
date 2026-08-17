import type { Movie } from "~/entities/movie";

export const movies: Movie[] = [
    {
        id: 1,
        title: "Побег из Претории",
        genres: "Триллер",
        rating: "6.70",
        image: "/images/movies/escape-from-pretoria.jpg",
    },
    {
        id: 2,
        title: "Джокер",
        genres: "Триллер, драма, криминал",
        rating: "8.50",
        image: "/images/movies/joker.jpg",
    },
    {
        id: 3,
        title: "Звёздные войны: Скайуокер. Восход",
        genres: "Фантастика, фэнтези, боевик, приключения",
        rating: "6.70",
        image: "/images/movies/star-wars.jpg",
    },
    {
        id: 4,
        title: "Джентльмены",
        genres: "Боевик, комедия, криминал",
        rating: "8.00",
        image: "/images/movies/gentlemen.jpg",
    },
    {
        id: 5,
        title: "Ford против Ferrari",
        genres: "Биография, спорт, драма, боевик",
        rating: "8.10",
        image: "/images/movies/ford-vs-ferrari.jpg",
    },
    {
        id: 6,
        title: "3022",
        genres: "Фантастика, триллер",
        rating: "4.90",
        image: "/images/movies/3022.jpg",
    },
    {
        id: 7,
        title: "Хищные птицы: Потрясающая история Харли Квинн",
        genres: "Боевик, криминал, комедия",
        rating: "6.20",
        image: "/images/movies/birds-of-prey.jpg",
    },
    {
        id: 8,
        title: "Плохие парни навсегда",
        genres: "Боевик, комедия, криминал",
        rating: "6.90",
        image: "/images/movies/bad-boys.jpg",
    },
];

export const movieCategories = [
    "Все",
    "Боевики",
    "Приключения",
    "Комедии",
    "Фантастика",
    "Триллеры",
    "Драма",
];