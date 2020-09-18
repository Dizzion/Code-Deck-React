import axios from 'axios'

const url = `https://codedeckapi.azurewebsites.net/api/auth`

class AuthService {
    static login(username, password) {
        return axios.post(`${url}/Login`, {username, password})
    }

    static register(username, password) {
        return axios.post(`${url}/Register`, {username, password})
    }

    static getCurrentUser() {
        return JSON.parse(sessionStorage.getItem("user"))
    }
}

export default AuthService