<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-6 mx-auto border py-4 px-md-4">
          <form>
            <h1 class="h3 mb-3">Login</h1>
            <div class="mb-2">
              <label for="email" class="form-label">E-Mail address</label>
              <input type="email" class="form-control" id="email" v-model="user.email">
            </div>
            <div class="mb-2">
              <label for="password1" class="form-label">Password</label>
              <input type="password" class="form-control" id="password1" v-model="user.password">
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
    password: null
  })
  const errors = ref([])
  
  const sendForm = (e) => {
    e.preventDefault()
    errors.value = []

    AuthService.login(user.value)
    .then((res) => {
        console.log(res.data)
        tokenStore.setToken(res.data.token)
        tokenStore.setUser(res.data.user)

        router.push('/')
    })
    .catch((err) => {
    errors.value.push(err.response.data.message)
    })
}
</script>