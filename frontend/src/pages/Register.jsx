import { Link } from "react-router-dom"
import "./Register.css"

function Login() {
  return (
    <div className="home login">
        <div>
            <p className="create_acct_logo">Create an Account</p>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <input type="password" placeholder="Create Password" />
                <input type="password" placeholder="Repeat Password" />
                <input id="checkbox" type="checkbox"/><label for="checkbox">I agree to all statements in <span>Terms and Services</span></label>
            </form>
            <button className="button" >REGISTER</button>
            <div className="create_acct">
                <p className="login_text">Have an account already?</p>
                <Link className="login_from_register_page" to="/login">Login here</Link>
            </div>
        </div>
    </div>
  )
}

export default Login;
