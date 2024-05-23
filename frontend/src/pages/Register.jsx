import { Link } from "react-router-dom"
import { useState } from "react"
import "./Register.css"
import authService from "../services/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [match, setMatch] = useState(true);
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handlePassword2Change = (event) => {
        setPassword2(event.target.value)
    }

    const createUser = (event) => {
        event.preventDefault()
        const newUserObj = {
            name, email, password, password2
        }

        if (password !== password2) {
            setMatch(false);
        }

        authService
        .signUp(newUserObj)
        .then(res => {
            setName('');
            setEmail('');
            setPassword('');
            setPassword2('');
            if (res.status === 200)
                navigate("/home")
        })
    }

  return (
    <div className="home login">
        <div>
            <p className="create_acct_logo">Create an Account</p>
            <form onSubmit={createUser}>
                <input type="text" value={name} placeholder="Your Name" onChange={handleNameChange} required/>
                <input type="email" placeholder="Your Email" onChange={handleEmailChange} required/>
                <input type="password" placeholder="Create Password" onChange={handlePasswordChange} className="input_pwd" required/>
                {!match && <p className="wrong_pwd">passwords do not match</p>}
                <input type="password" placeholder="Repeat Password" onChange={handlePassword2Change} required/>
                <input id="checkbox" type="checkbox" required/>
                <label for="checkbox">I agree to all statements in <span>Terms and Services</span></label>
                <button className="button register">REGISTER</button>
            </form>
            <div className="create_acct">
                <p className="login_text">Have an account already?</p>
                <Link className="login_from_register_page" to="/login">Login here</Link>
            </div>
        </div>
    </div>
  )
}

export default Login;
