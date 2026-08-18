import type { Trailer } from "~/entities/trailer";

export const trailers: Trailer[] = [
    {
        id: "fast-9",
        movieId: "fast-9",
        title: "Форсаж 9",
        thumbnail: "https://picsum.photos/seed/fast9/300/200",
        videoUrl: "/videos/trailers/fast-9.mp4",
        author: {
            name: "Moviearea",
            avatar: "/images/avatars/moviearea.png",
        },
        stats: {
            views: 3265,
            likes: 420,
            dislikes: 42,
        },
    },
    {
        id: "mulan",
        movieId: "mulan",
        title: "Мулан",
        thumbnail: "https://picsum.photos/seed/mulan/300/200",
        videoUrl: "/videos/trailers/mulan.mp4",
        author: {
            name: "Moviearea",
            avatar: "/images/avatars/moviearea.png",
        },
        stats: {
            views: 2150,
            likes: 380,
            dislikes: 25,
        },
    },
    {
        id: "fast-9-second",
        movieId: "fast-9",
        title: "Форсаж 9 (второй трейлер)",
        thumbnail: "https://picsum.photos/seed/fast9second/300/200",
        videoUrl: "/videos/trailers/fast-9-2.mp4",
        author: {
            name: "Moviearea",
            avatar: "/images/avatars/moviearea.png",
        },
        stats: {
            views: 1840,
            likes: 210,
            dislikes: 15,
        },
    },
    {
        id: "black-widow",
        movieId: "black-widow",
        title: "Чёрная вдова",
        thumbnail: "https://picsum.photos/seed/blackwidow/300/200",
        videoUrl: "/videos/trailers/black-widow.mp4",
        author: {
            name: "Moviearea",
            avatar: "/images/avatars/moviearea.png",
        },
        stats: {
            views: 2950,
            likes: 450,
            dislikes: 30,
        },
    },
    {
        id: "quiet-place-2",
        movieId: "quiet-place-2",
        title: "Тихое место 2",
        thumbnail: "https://picsum.photos/seed/quietplace2/300/200",
        videoUrl: "/videos/trailers/quiet-place-2.mp4",
        author: {
            name: "Moviearea",
            avatar: "/images/avatars/moviearea.png",
        },
        stats: {
            views: 2100,
            likes: 340,
            dislikes: 28,
        },
    },
];

import type { Movie } from "~/entities/movie";

export const movies: Movie[] = [
    {
        id: 1,
        title: "Побег из Претории",
        genres: "Триллер",
        rating: "6.70",
        image: "https://picsum.photos/seed/escapepretoria/300/450",
    },
    {
        id: 2,
        title: "Джокер",
        genres: "Триллер, драма, криминал",
        rating: "8.50",
        image: "https://picsum.photos/seed/joker/300/450",
    },
    {
        id: 3,
        title: "Звёздные войны: Скайуокер. Восход",
        genres: "Фантастика, фэнтези, боевик, приключения",
        rating: "6.70",
        image: "https://picsum.photos/seed/starwars/300/450",
    },
    {
        id: 4,
        title: "Джентльмены",
        genres: "Боевик, комедия, криминал",
        rating: "8.00",
        image: "https://picsum.photos/seed/gentlemen/300/450",
    },
    {
        id: 5,
        title: "Ford против Ferrari",
        genres: "Биография, спорт, драма, боевик",
        rating: "8.10",
        image: "https://picsum.photos/seed/fordferrari/300/450",
    },
    {
        id: 6,
        title: "3022",
        genres: "Фантастика, триллер",
        rating: "4.90",
        image: "https://picsum.photos/seed/3022/300/450",
    },
    {
        id: 7,
        title: "Хищные птицы: Потрясающая история Харли Квинн",
        genres: "Боевик, криминал, комедия",
        rating: "6.20",
        image: "https://picsum.photos/seed/birdsofprey/300/450",
    },
    {
        id: 8,
        title: "Плохие парни навсегда",
        genres: "Боевик, комедия, криминал",
        rating: "6.90",
        image: "https://picsum.photos/seed/badboys/300/450",
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