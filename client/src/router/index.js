import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: import('@/views/MoviesView.vue')
    },
    {
      path: '/movies/:id',
      name: 'show-movie',
      component: import('@/views/ShowMovieView.vue')
    },
    {
      path: '/ratings/new-rating',
      name: 'new-rating',
      component: import('@/views/CreateRatingView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: import('@/views/RegisterView.vue')
    }
  ],
})

export default router
