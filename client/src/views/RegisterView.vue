<template>
  <div class="row">
    <div class="col-12 col-md-8 col-lg-6 mx-auto border py-4 px-md-4">
      <form>
        <h1 class="h3 mb-3">Register</h1>
        <div class="mb-2">
          <label for="email" class="form-label">E-Mail address</label>
          <input type="email" class="form-control" id="email" v-model="user.email">
        </div>
        <div class="mb-2">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" v-model="user.username">
        </div>
        <div class="mb-2">
          <label for="password1" class="form-label">Password</label>
          <input type="password" class="form-control" id="password1" v-model="user.password">
        </div>
        <div class="mb-3">
          <label for="password2" class="form-label">Password (again)</label>
          <input type="password" class="form-control" id="password2" v-model="passwordCheck">
        </div>
        <button class="btn btn-success" @click="sendForm">Submit</button>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthService from '@/services/AuthService'
import { useTokenStore } from '@/stores/tokens'

const router = useRouter()
const tokenStore = useTokenStore()

const user = ref({
  email: null,
  username: null,
  password: null
})
const passwordCheck = ref(null)
const errors = ref([])

const sendForm = (e) => {
  e.preventDefault()
  errors.value = []

  if(user.value.password !== passwordCheck.value) {
    errors.value.push('Passwords do not match.')
  } else {
    AuthService.register(user.value)
    .then((res) => {
      tokenStore.setToken(res.data.token)
      tokenStore.setUser(res.data.user)

      router.push('/')
    })
    .catch((err) => {
      errors.value.push(err.response.data.message)
    })
  }
}

</script>