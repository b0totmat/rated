<template>
  <div class="row">
    <div class="col-12 col-md-6 border">
      {{ movie?.title || 'Loading...' }}
    </div>
    <div class="col-12 col-md-6 border">
      
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movies'

const route = useRoute()
const movieStore = useMovieStore()
const movie = ref(null)

onMounted(async () => {
  const movieId = route.params.id
  console.log(movieId)
  try {
    const response = await movieStore.getMovie(movieId)
    movie.value = response
  } catch(e) {
    console.error(e)
  }
})

</script>