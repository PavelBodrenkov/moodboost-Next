import {makeAutoObservable} from 'mobx'
import AuthorizeService from '../http/userAPI';
import axios from 'axios';

class UserStore {
    user = {}
    error = ''
    loader = false
    isAuth = false
    openAuth = false
    constructor (){
        makeAutoObservable(this)
        this.setIsAuth = this.setIsAuth.bind(this)
        this.setLoader = this.setLoader.bind(this)
    }


    setLoader (bool) {
        this.loader = bool
    }

    setUserError (message) {
        this.error = message
    }
    setOpenAuth (bool) {
        this.openAuth = bool
    }

    setIsAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    async login (email, password) {
        try {
            const response = await AuthorizeService.login(email, password)
            localStorage.setItem('userToken', response.data.accessToken)
            this.setIsAuth(true)
            this.setUser(response.data.user)
            this.setOpenAuth(false)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration (name, email, password) {
        try {
            const response = await AuthorizeService.register(name, email, password)
            localStorage.setItem('userToken', response.data.accessToken)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout () {
        try {
            const response = await AuthorizeService.logout()
            localStorage.removeItem('userToken')
            this.setIsAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

     checkAuth() {
        this.setLoader(true)
        axios.get('https://api.moodboost.me/refresh', {withCredentials: true})
        .then((response) => {
            localStorage.setItem('userToken', response.data.accessToken)
            this.setIsAuth(true)
            this.setUser(response.data.user)
        })
        .catch((e) => {
            console.log(e)
            })
        .then(() => {
            this.setLoader(false)
        });
    }

    get isAuth () {
        return this.isAuth
    }

    get user () {
        return this.user
    }

    get openAuth () {
        return this.openAuth
    }

    get userError() {
        return this.error
    }

    get loader () {
        return this.loader
    }
}

const userStore = new UserStore();
export default userStore;