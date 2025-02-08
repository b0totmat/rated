<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTokenStore } from './stores/tokens'

import Header from './components/Header.vue'

const tokenStore = useTokenStore()

const logout = () => {
  tokenStore.setToken(null)
  tokenStore.setUser(null)
}
</script>

<template>
  <div class="container">
    <Header :is-user-logged-in="tokenStore.isUserLoggedIn" :logout="logout" />
    <RouterView />
  </div>
</template>