export interface MovieFrame {
    imageUrl: string;
    previewUrl: string;
}

export interface MovieFramesApiResponse {
    total: number;
    totalPages: number;
    items: MovieFrame[];
}