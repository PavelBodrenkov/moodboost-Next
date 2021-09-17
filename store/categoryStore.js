import {makeAutoObservable} from 'mobx'

class CategoryStore {

    oneCategory = {}
    isAsideOpen = false
    constructor (){
        makeAutoObservable(this)
    }

    setOneCategory(category) {
        this.oneCategory = category
    }

    setIsAsideOpen(bool) {
        this.isAsideOpen = bool
    }

    get oneCategory() {
        return this.oneCategory
    }

    get isAsideOpen() {
        return this.isAsideOpen
    }

}

const categoryStore = new CategoryStore();
export default categoryStore;