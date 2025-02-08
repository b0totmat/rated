<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 card" v-for="m in movies" :key="m.movieId">
        <div class="card-body">
          <h5 class="card-title">{{ m?.title }}</h5>
          <p class="card-text">Rating: {{ m?.score }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movies'

const movieStore = useMovieStore()
const movies = ref([])

onMounted(async () => {
    await movieStore.getMovies()
    movies.value = movieStore.movies
})
</script>