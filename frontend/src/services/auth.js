import axios from "axios"

const login = loginObj => {
    const res = axios.post("/api/login", loginObj)
    return res
}

const signUp = (newUserObj) => {
    const res = axios.post("/api/signup", newUserObj)
    return res
}

export default { login, signUp}