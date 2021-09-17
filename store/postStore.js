import {makeAutoObservable} from 'mobx'

class PostStore {

    post = []
    posts = []
    sortPosts = []
    searchPost = []
    getSearchPost = []
    getEmilApi = []
    postEdit = false
    selectedPost = {}
    appEditPost = []
    title = ''
    categoryId = ''
    statusPost = ''
    bodyPost = ''
    file = null
    anons = ''
    views = ''
    slug = ''
    description = ''
    keyWord = ''
    stopScroll = true
    postCategiry = []
    postSort = []
    isLiked = false
    opanShare = false
    postCount = ''
    middlePost = []

    constructor (){
        makeAutoObservable(this)
    }

    setMiddlePost(posts) {
        this.middlePost = posts
    }
    
    setPostCount (count) {
        this.postCount = count
    }

    setAnons (text) {
        this.anons = text
    }
   
    setOpenShare (bool) {
        this.opanShare = bool
    }
    
    setPostSort (post) {
        this.postSort = post
    }
    setTitle (title) {
        this.title = title
    }
    setCategoryId (categoryId) {
        this.categoryId = categoryId
    }
    setStatusPost (status) {
        this.statusPost = status
    }
    setBodyPost (BodyPost) {
        this.bodyPost = BodyPost
    }
    setFile (file) {
        this.file = file
    }
    setViews (views) {
        this.views = views
    }
    setSlug (slug) {
        this.slug = slug
    }
    setDescription (description) {
        this.description = description
    }
    setKeyWord (keyWord) {
        this.keyWord = keyWord
    }
    setStopScroll (bool) {
        this.stopScroll = bool
    }

    setPost (post) {
        this.post = post 
    }

    setPosts(posts) {
        this.posts = posts
    }

    setSortPosts(posts) {
        this.sortPosts = posts
    }

    setSearchPost(text) {
        this.searchPost = text
    }

    setGetSearchPost (posts) {
        this.getSearchPost =  posts
    }

    setGetEmilApi (post) {
        this.getEmilApi = post
    }

    setAddPost (post) {
        this.posts.push(post)
    }

    setPostEdit (bool) {
        this.postEdit = bool
    }

    setSelectedPost (post) {
        this.selectedPost = post
    }

    setAppEditPost (post) {
        this.appEditPost = post
    }

    setPostCategory (post) {
        this.postCategiry = post
    }

    setIsLiked(bool) {
        this.isLiked = bool
    }

    get postCategory () {
        return this.postCategiry
    }

    get post () {
        return this.post
    }

    get posts () {
        return this.posts
    }

    get sortPosts () {
        return this.sortPosts
    }

    get searchPost () {
        return this.searchPost
    }

    get getSearchPost () {
        return this.getSearchPost
    }

    get getEmilApi() {
        return this.getEmilApi
    }

    get postEdit () {
        return this.postEdit
    }

    get selectedPost () {
        return this.selectedPost
    }

    get appEditPost () {
        return this.appEditPost
    }

    get title () {
        return this.title 
    }
    get categoryId () {
        return this.categoryId
    }
    get statusPost () {
        return this.statusPost
    }
    get bodyPost () {
        return this.bodyPost
    }
     get file () {
        return this.file
    }
    get views () {
        return this.views
    }
    get slug () {
        return this.slug
    }
    get description () {
        return this.description
    }
    get keyWord () {
        return this.keyWord
    }
    get stopScroll () {
        return this.stopScroll
    }

    get postSort () {
        return this.postSort
    }

    get isLiked () {
        return  this.isLiked
    }

    get openShare () {
       return this.opanShare
    }

    get anons () {
        return this.anons
    }

    get postCount () {
        return this.postCount
    }

    get middlePost() {
        return this.middlePost
    }

}

const postStore = new PostStore();
export default postStore;