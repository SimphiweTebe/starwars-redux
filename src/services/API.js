import axios from 'axios';

const API = () => {
    return axios.create({
        baseURL: "https://swapi.dev/api/films/"
    })
}

export default API;