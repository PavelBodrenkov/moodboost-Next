import { $hostPost } from "./index"

export default class CommentService {
    static async comment (type) {
        return $hostPost.post('comments' + '/' + 'add', type)
    }

    static async commentAnswer (body, parent, post) {
        return $hostPost.post('comments/add', {body, parent, post})
    }

    static async likeComment (id) {
        return $hostPost.put('comments' + '/likes', {id})
    }

    static async dislikeComment (id) {
        return $hostPost.delete('comments' + '/likes', {data:{id: id}})
    }

    static async AllComment (id) {
        return $hostPost.get('comments/' + id)
    }
}
