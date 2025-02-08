import Api from "./Api.js"

const api = Api()

export default {
    register(credentials) {
        return api.post('users/register', credentials)
    },
    login(credentials) {
        return api.post('users/login', credentials)
    }
}
