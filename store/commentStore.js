import {makeAutoObservable} from 'mobx'

class CommentStore {

    allComments = []
    comment = {}
    addComment = {}
    commentFile = null

    constructor () {
        makeAutoObservable(this)
    }

    setCommentFile(file) {
        this.commentFile = file
    }

    setAllComments (comment) {
        this.allComments = comment
    }

    setComment (comment) {
        this.allComments.push(comment)
    }

    setAddComment (comment) {
        this.allComments.push(comment)
    }

    get allComments () {
        return this.allComments
    }

    get comment () {
        return this.comment
    }

    get commentFile () {
        return this.commentFile
    }


}

const commentStore = new CommentStore();
export default commentStore;