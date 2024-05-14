import axios from "axios"
const baseUrl = '/api/login'

const postLoginInfo = loginObject => {
    const req = axios.post(baseUrl, loginObject)
    const data = req.then(res => res.data)
    return data
}

export default { postLoginInfo }