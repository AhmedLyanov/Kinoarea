export interface CarouselProps {
    currentPage?: number;
    totalPages?: number;
    controlsPosition?: "center" | "right";
    controlsPlacement?: "top" | "bottom";
    orientation?: "horizontal" | "vertical";
}

export interface CarouselEmits {
    prev: [];
    next: [];
    "update:currentPage": [value: number];
}