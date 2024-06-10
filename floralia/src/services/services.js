import axios from "axios";

const portaApi = '4466'

const ip = '172.16.39.20';

const apiUrlLocal = `http://${ip}:${portaApi}/api`

const api = axios.create({
    baseURL : apiUrlLocal
})

export default api;