import axios from 'axios'
//user
const $hostPost = axios.create({
    withCredentials: true,
    baseURL: 'https://api.moodboost.me/'
     //baseURL: 'http://localhost:3000/'
})

//admin
const $hostPostAdmin = axios.create({
    withCredentials: true,
    //baseURL: 'http://localhost:3000/'
    baseURL: 'https://api.moodboost.me/'
})

//admin
$hostPostAdmin.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('adminToken')}`
    return config
})
//admin
$hostPostAdmin.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config;
    if(error?.response?.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            //const response = await axios.get('http://localhost:3000/refreshadmin', {withCredentials: true})
            const response = await axios.get(process.env.API_HOST + 'refreshadmin', {withCredentials: true})
            localStorage.setItem('userToken', response.data.accessToken)
            return $hostPost.request(originalRequest)
        } catch (error) {
            console.log('Authorization is required')
        }
    }
    throw error;
})

//user
$hostPost.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('userToken')}`
    return config
})

//user
$hostPost.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config;
    if(error?.response?.status == 401 && error.config && !error?.config?._isRetry) {
        originalRequest._isRetry = true;
        try {
            //const response = await axios.get('http://localhost:3000/refresh', {withCredentials: true})
            const response = await axios.get(process.env.API_HOST + 'refresh', {withCredentials: true})
            localStorage.setItem('userToken', response.data.accessToken)
            return $hostPost.request(originalRequest)
        } catch (error) {
            console.log('Authorization is required')
        }
    }
    throw error;
})

export {
    $hostPost,
    $hostPostAdmin
}