import Api from "./Api"

const api = Api()

export default {
    index() {
        return api.get('/ratings')
    },
    show(id) {
        return api.get(`/ratings/${id}`)
    },
    insert(rating) {
        return api.post('/ratings', rating)
    }
}
