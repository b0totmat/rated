import { defineStore } from "pinia"
import MovieService from "@/services/MovieService"

export const useMovieStore = defineStore('movie', () => {
    const getMovies = () => {
        MovieService.index()
        .then(response => {
            return response.data
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

    return { getMovies, getMovie }
})
