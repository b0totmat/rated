<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useTokenStore } from './stores/tokens'

import Header from './components/Header.vue'

const route = useRoute(),
      router = useRouter()

const tokenStore = useTokenStore()

const logout = () => {
  tokenStore.setToken(null)
  tokenStore.setUser(null)

  if(route.name === 'new-rating') {
    router.push('/')
  }
}
</script>

<template>
  <div class="container">
    <Header :is-user-logged-in="tokenStore.isUserLoggedIn" :logout="logout" />
    <RouterView />
  </div>
</template>