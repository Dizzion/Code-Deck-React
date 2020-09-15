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
    static create = (CodeCard) => {
        return axios.post(`${url}/`, CodeCard, { headers: AuthHeader() })
    }
    static update = (id, CodeCard) => {
        return axios.put(`${url}/${id}`, CodeCard, { headers: AuthHeader() })
    }
    static updateOne = (id, updateItem) => {
        return axios.patch(`${url}/${id}`, updateItem, { headers: AuthHeader() })
    }
}

export default CodeDeckModel