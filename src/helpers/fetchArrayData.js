import axios from "axios";

export const fetchArrayData = async (arr) => {
    const data = await Promise.all(arr.map(async (url) => {
        const resp = await axios.get(url)
        return resp.data
    }))
    return data;
}