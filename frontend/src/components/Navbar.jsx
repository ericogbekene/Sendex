import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <a className="logo" href="/">Sendex</a>
                <ul>
                    <li><Link className="info" to="">About</Link></li>
                    <li><Link className="info" href="" >Services</Link></li>
                    <li><Link className="info" to="/login">Login</Link></li>
                    <li><Link className="info" to="/register">Register</Link></li>
                    <li><Link className="info" to="">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;