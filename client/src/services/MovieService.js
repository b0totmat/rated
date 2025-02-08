import Api from "./Api"

const api = Api()

export default {
    index() {
        return api.get('/movies')
    },
    show(movieId) {
        return api.get(`/movies/${movieId}`)
    }
}
