import { getMovies } from "../services/movie.service";

export default defineEventHandler(async () => {
    return await getMovies();
});