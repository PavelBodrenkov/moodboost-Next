import { $hostPost,$hostPostAdmin } from "./index";


export default class PostService {
    static async likePost (id) {
        return $hostPost.put('posts' + '/likes' + '/' + id, null)
    }

    static async deleteLikePost (id) {
        return $hostPost.delete('posts' + '/likes' + '/' + id)
    }

    static async fetchCreatePostAdmin (type) {
        return $hostPostAdmin.post('posts', type)
    }

    static async fetchEditPostAdmin (id, type) {
        return $hostPostAdmin.patch('posts' + '/' + id , type)
    }

    static async fetchDeletePostAdmin (id) {
        return $hostPostAdmin.delete('posts' + '/' + id)
    }

    static async fetchOneDevice (id) {
        return $hostPostAdmin.get('posts' + '/post' + '/' + id)
    }

    static async fetchPost (countPage, limit) {
        return $hostPostAdmin.get(`posts?skip=${countPage}&limit=${limit}`)
    }

    static async fetchAllDeviceCategory (id) {
        return $hostPost.get('posts' + '/' + id)
    }

    static async fetchShare (id) {
        return $hostPostAdmin.post('posts' + '/share' + '/' + id)
    }

    static async fetchSearch (sear) {
        return $hostPost.get(`posts/search?search=${sear}`)
    }
}



