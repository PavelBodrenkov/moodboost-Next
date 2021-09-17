import { $hostPostAdmin } from "./index";

//Получить все категории
export const fetchCategory = async () => {
    const category = await $hostPostAdmin.get('categories')
    return category
}


//Создать категорию
export const fetchPostCategory = async (type) => {
    const postCategory = await $hostPostAdmin.post('categories', type)
    return postCategory
}


// Получить все роли с Апи
export const fetchAdminRoles = async(token) => {
    const AllAdminRole = await $hostPostAdmin.get('/roles', {
        headers: {
            "Content-Type": "application/json",
            authorization : `Bearer ${token}`
            }
    })
    return AllAdminRole
}

export default class AuthorizeServiceAdmin {
    static async login (email, password) {
        return $hostPostAdmin.post('/signinadmin', {email, password})
    }

    static async register (email, password) {
        return $hostPostAdmin.post('/signupadmin', {email, password})
    }

    static async logout () {
        return $hostPostAdmin.post('/logoutadmin')
    }

}



