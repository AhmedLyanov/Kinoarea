export interface Trailer {
    id: string;
    movieId: string;

    title: string;
    thumbnail: string;
    videoUrl: string;

    duration?: number;

    author?: {
        name: string;
        avatar?: string;
    };

    stats?: {
        views: number;
        likes: number;
        dislikes: number;
    };
}