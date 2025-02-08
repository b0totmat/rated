import { ref } from "vue"
import { defineStore } from "pinia"
import MovieService from "@/services/MovieService"

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

    const getMovie = (id) => {
        MovieService.show(id)
        .then(response => {
            return response.data
        })
    }

    return { movies, getMovies, getMovie }
})
