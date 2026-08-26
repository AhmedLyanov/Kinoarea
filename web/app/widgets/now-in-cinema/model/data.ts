import type { Movie } from "~/entities/movie";

export const movies: Movie[] = [
    {
        id: 1,
        title: "Побег из Претории",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
        rating: {
            imdb: 6.7,
        },
        genres: ["Триллер"],
    },
    {
        id: 2,
        title: "Джокер",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&h=450&fit=crop",
        rating: {
            imdb: 8.5,
        },
        genres: ["Триллер", "Драма", "Криминал"],
    },
    {
        id: 3,
        title: "Звёздные войны: Скайуокер. Восход",
        image: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?w=300&h=450&fit=crop",
        rating: {
            imdb: 6.7,
        },
        genres: ["Фантастика", "Фэнтези", "Боевик", "Приключения"],
    },
    {
        id: 4,
        title: "Джентльмены",
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
        rating: {
            imdb: 8.0,
        },
        genres: ["Боевик", "Комедия", "Криминал"],
    },
    {
        id: 5,
        title: "Ford против Ferrari",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=450&fit=crop",
        rating: {
            imdb: 8.1,
        },
        genres: ["Биография", "Спорт", "Драма", "Боевик"],
    },
    {
        id: 6,
        title: "3022",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=450&fit=crop",
        rating: {
            imdb: 4.9,
        },
        genres: ["Фантастика", "Триллер"],
    },
    {
        id: 7,
        title: "Хищные птицы: Потрясающая история Харли Квинн",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=450&fit=crop",
        rating: {
            imdb: 6.2,
        },
        genres: ["Боевик", "Криминал", "Комедия"],
    },
    {
        id: 8,
        title: "Плохие парни навсегда",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop",
        rating: {
            imdb: 6.9,
        },
        genres: ["Боевик", "Комедия", "Криминал"],
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