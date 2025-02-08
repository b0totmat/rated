import { ref } from "vue"
import { defineStore } from "pinia"
import RatingService from "@/services/RatingService"

export const useRatingStore = defineStore('rating', () => {
    const ratings = ref([])

    const getRatings = async () => {
        await RatingService.index()
        .then(response => {
            ratings.value = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }

    return { ratings, getRatings }
})
