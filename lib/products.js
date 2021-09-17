// export async function fetchProducts({skip}) {
//     const productsListReq = await fetch(`https://api.moodboost.me/posts?skip=${skip}`)
//     const list = await productsListReq.json()

//     return list
// }

export class Api {
    constructor () {
        this.fetchPage = this.fetchPage.bind(this)
    }

    fetchPage(skip) {
        const page = skip || 0

        return page
    }

     async fetchProducts () {
        const productsListReq = await fetch(`https://api.moodboost.me/posts?skip=${this.fetchPage}`)
        const list = await productsListReq.json()
    
        return list
    }
}

