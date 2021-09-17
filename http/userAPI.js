import { $hostPost } from "./index"

export default class AuthorizeService {
    static async login (email, password) {
        return $hostPost.post('/signin', {email, password})
    }

    static async register (name, email, password) {
        return $hostPost.post('/signup', {name, email, password})
    }

    static async logout () {
        return $hostPost.post('/logout')
    }

    static async fetchUsers () {
        return $hostPost.get('/users')
    }
}

