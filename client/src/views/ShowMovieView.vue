<template>
  <div class="row gx-2">
    <div class="col-12 col-md-6 border p-3">
      {{ movie?.title || 'Loading...' }}
    </div>
    <div class="col-12 col-md-6 border p-3">
      <form>
        <h2 class="h3 mb-3">Rate it!</h2>
        <div class="mb-2">
          <label for="score" class="form-label">Rate the movie x/5:</label>
          <input type="range" class="form-range d-block" id="score" min="1" max="5" style="width: 200px" v-model="score">
        </div>
        <div class="mb-2 form-floating">
          <textarea id="detailed-opinion" class="form-control" style="height: 120px"></textarea>
          <label for="detailed-opinion" class="form-label">Write a detailed opinion about the movie:</label>
        </div>
        <button class="btn btn-primary" @click="sendForm">Rate</button>
        <!--
        <div class="mt-3" id="errors" v-if="errors.length !== 0">
          <ul class="list-group">
            <li class="list-group-item bg-danger text-light" v-for="e in errors">{{ e }}</li>
          </ul>
        </div>
        -->
      </form>
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
const score = ref(5)

const sendForm = (e) => {
  e.preventDefault()
  score.value = Number(score.value)
  console.log(score.value)
}

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