import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', () => {
  const token = ref(null)
  const user = ref(null)
  const isUserLoggedIn = ref(false)

  const setToken = (newToken) => {
    token.value = newToken

    if(token.value != null) {
      isUserLoggedIn.value = true
    } else {
      isUserLoggedIn.value = false
    }
  }

  const setUser = (newUser) => {
    user.value = newUser
  }

  return { token, user, isUserLoggedIn, setToken, setUser }
})
