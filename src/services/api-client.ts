import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fef7e31d01ee4a1d8f234a10cf883c22'
    }
})