<template>
  <h1>Movie - {{ movieId }}</h1>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = ref(route.params.id)
</script>