import axios from 'axios'
import AuthHeader from '../Service/AuthHeader'

const url = `https://codedeckapi.azurewebsites.net/api/CodeDeck`

class CodeDeckModel {
    static all = () => {
        return axios.get(`${url}/`)
    }
    static show = (id) => {
        return axios.get(`${url}/${id}`)
    }
    // Admin Only
    static create = (CodeCard) => {
        return axios.post(`${url}/`, CodeCard, { headers: AuthHeader() })
    }
    // Admin Only
    static update = (id, CodeCard) => {
        return axios.put(`${url}/${id}`, CodeCard, { headers: AuthHeader() })
    }
    // Admin Only
    static updateOne = (id, updateItem) => {
        return axios.patch(`${url}/${id}`, updateItem, { headers: AuthHeader() })
    }
}

export default CodeDeckModel