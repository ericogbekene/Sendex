import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()
    const path = location.pathname;

    return (
        <>
            <nav>
                <a className="logo" href="/">Sendex</a>
                <ul>
                    <li><Link className="info none" to="">About</Link></li>
                    <li><Link className="info none" href="" >Services</Link></li>
                    {path === "/" &&
                        <>
                            <li><Link className="info" to="/login">Login</Link></li>
                            <li><Link className="info" to="/register">Register</Link></li>
                        </>}
                    {path === "/home" &&
                        <>
                            <li><Link className="info" to="/my_account">Account</Link></li>
                            <li><Link className="info" to="/new_order">Create Order</Link></li>
                        </>}
                    <li><Link className="info none" to="">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;