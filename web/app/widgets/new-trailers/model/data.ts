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