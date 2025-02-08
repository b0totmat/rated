<template>
  <div class="container">
    <div class="row gx-md-2 gy-3 gy-md-2">
      <div class="col-12 col-md-6 col-lg-3" v-for="m in movies" :key="m.movieId">
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ m?.title }}</h5>
              <p class="card-text">Rating: 5</p>
              <button class="btn btn-primary" @click="redirect(m.movieId)">Rate it!</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMovieStore } from '@/stores/movies'

const router = useRouter()

const movieStore = useMovieStore()
const movies = ref([])

const redirect = (id) => {
  router.push(`/movies/${id}`)
}

onMounted(async () => {
    await movieStore.getMovies()
    movies.value = movieStore.movies
})
</script>