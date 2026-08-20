<template>
    <section class="flex gap-11.5">
        <div class="">
            <Poster
                src="https://i.pinimg.com/236x/ba/e3/90/bae39089a25b1faf4625359b9c61d28e.jpg"
                alt="Постер фильма"
            />
        </div>
        <div class="pt-7.75">
            <MovieDetails />
        </div>
    </section>
</template>

<script setup lang="ts">
import Poster from "./ui/poster.vue";
import MovieDetails from "./ui/movie-details.vue";
</script>
