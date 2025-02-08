<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTokenStore } from './stores/tokens'

const tokenStore = useTokenStore()
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Rated</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/movies">Browse</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-capitalize" to="/ratings/new-rating">New rating</RouterLink>
            </li>
          </ul>
        </div>
        <RouterLink class="btn btn-outline-primary" to="/login">
          <i class="fa-regular fa-user"></i>
        </RouterLink>
      </div>
    </nav>
  </div>
  <RouterView />
</template>