import { ref } from "vue"
import { defineStore } from "pinia"
import RatingService from "@/services/RatingService"

export const useRatingStore = defineStore('rating', () => {
    const ratings = ref([])

    const loadRatings = async () => {
        await RatingService.index()
        .then(response => {
            ratings.value = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }

    const rateMovie = async (rating) => {
        await RatingService.insert(rating)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return { ratings, loadRatings, rateMovie }
})
