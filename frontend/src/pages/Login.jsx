import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import authService from "../services/auth";

function Login() {
    const [newEmail, setEmail] = useState('')
    const [newPassword, setPassword] = useState('')
    const navigate = useNavigate();

    // Get user email address
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    // Get user's password
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // Store User's login information for validation
    const addLoginInfo = async (event) => {
        event.preventDefault();
        const loginObj = {
            email: newEmail,
            password: newPassword,
        }

        await authService
        .login(loginObj)
        .then(res => {
            setEmail('')
            setPassword('')
            if (res.status === 200)
                navigate("/home")
        })
        .catch(err => alert(err.response.data.msg))
    }

    const handleRegister = () => {
        navigate("/register");
    }

  return (
    <div className="home login">
        <div>
            <p className="logo">Sendex</p>
            <p className="login_text">Please login to your account</p>
            <form onSubmit={addLoginInfo}>
                <input type="email" placeholder="Email" value={newEmail} onChange={handleEmailChange} required/>
                <input type="password" placeholder="Password" value={newPassword} onChange={handlePasswordChange} required/>
                <button className="button">LOG IN</button>
            </form>
            <p className="forgot_pwd login_text ">Forgot password?</p>
            <div className="create_acct">
                <p className="login_text">Don't have an account?</p>
                <button type="submit" onClick={handleRegister}>CREATE ACCOUNT</button>
            </div>
        </div>
    </div>
  )
}

export default Login;
