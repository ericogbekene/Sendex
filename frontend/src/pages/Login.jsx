import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/register");
    }

  return (
    <div className="home login">
        <div>
            <p className="logo">Sendex</p>
            <p className="login_text">Please login to your account</p>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
            </form>
            <button className="button" >LOG IN</button>
            <p className="forgot_pwd login_text ">Forgot password?</p>
            <div className="create_acct">
                <p className="login_text">Don't have an account?</p>
                <button onClick={handleRegister}>CREATE ACCOUNT</button>
            </div>
        </div>
    </div>
  )
}

export default Login;
