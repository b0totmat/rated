import { ref } from "vue"
import { defineStore } from "pinia"
import MovieService from "@/services/MovieService.js"

export const useMovieStore = defineStore('movie', () => {
    const movies = ref([])

    const getMovies = async () => {
        await MovieService.index()
        .then(response => {
            movies.value = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }

    const getMovie = async (id) => {
        let movie = null
        await MovieService.show(id)
        .then(response => {
            movie = response.data
        })
        .catch(error => {
            console.log(error)
        })

        return movie
    }

    return { movies, getMovies, getMovie }
})
