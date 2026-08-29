<script setup lang="ts">
import { getMovie } from "~/entities/movie/api/get-movie";
import {
    MovieCover,
    MovieMetadata,
    MovieTrailer,
    MovieFrames,
    MoviePlayer,
} from "~/widgets";

definePageMeta({
    layout: "movie",
});

const route = useRoute();
const movie = await getMovie(String(route.params.id));


useSeoMeta({

  title: () => `${movie.title} (${movie.year}) смотреть онлайн в HD качестве`,
  
  description: () => `Смотреть онлайн фильм «${movie.title}» (${movie.year}) бесплатно. Описание: ${movie.description?.slice(0, 120)}...`,
  

  ogTitle: () => `${movie.title} (${movie.year}) — смотреть онлайн`,
  ogDescription: () => movie.description?.slice(0, 150),
  ogImage: () => movie.poster,
  ogType: 'video.movie', 
  twitterCard: 'summary_large_image',
})


useSchemaOrg([
  defineMovie({
    name: movie.title,
    alternativeHeadline: movie.originalTitle, 
    image: movie.poster, 
    dateCreated: movie.year?.toString(),
    genres: movie.genres, 
    directors: {
      name: movie.directors 
    },

    aggregateRating: {
      ratingValue: movie.rating || 7.0, 
      bestRating: 10,
      worstRating: 1,
    }
  })
])
</script>


<template>
    <div class="mx-auto max-w-[1430px]">
        <div class="px-[143px]">
            <MovieCover :movie="movie" />

            <MovieMetadata :movie="movie" />

        </div>
        <MovieTrailer :movie="movie" />
        <MovieFrames :movie="movie" />
        <MoviePlayer :movie="movie" />
    </div>
</template>