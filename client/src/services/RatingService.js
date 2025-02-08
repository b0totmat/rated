import Api from "./Api"

const api = Api()

export default {
    insert(rating) {
        return api.post('/ratings', rating)
    }
}
