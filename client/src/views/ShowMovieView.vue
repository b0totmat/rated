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
          <textarea id="detailed-opinion" class="form-control" style="height: 120px" v-model="detailedOpinion"></textarea>
          <label for="detailed-opinion" class="form-label">Write a detailed opinion about the movie:</label>
        </div>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="modal-login-warning" @click="sendForm">Rate</button>
        <div class="mt-3" id="errors" v-if="errors.length !== 0">
          <ul class="list-group">
            <li class="list-group-item bg-danger text-light" v-for="e in errors">{{ e }}</li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useMovieStore } from '@/stores/movies'
import { useTokenStore } from '@/stores/tokens'
import { useRatingStore } from '@/stores/ratings'

const route = useRoute(),
      router = useRouter()

const movieStore = useMovieStore()
const tokenStore = useTokenStore()
const ratingStore = useRatingStore()

const movie = ref(null)
const score = ref(5)
const detailedOpinion = ref('')
const errors = ref([])

const sendForm = (e) => {
  e.preventDefault()
  redirect()

  score.value = Number(score.value)
  
  ratingStore.rateMovie({
    score: score.value,
    movieId: movie.value.movieId,
    userId: tokenStore.user.userId
  })
}

onMounted(async () => {
  redirect()

  const movieId = route.params.id
  try {
    const response = await movieStore.getMovie(movieId)
    movie.value = response
  } catch(e) {
    console.error(e)
  }
})

const redirect = () => {
  if(!tokenStore.isUserLoggedIn) {
    router.push({name: 'login'})
  }
}

</script>