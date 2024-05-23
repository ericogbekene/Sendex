import { useNavigate } from "react-router-dom";
import Image from '../assets/rider.jpg';

const Body = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const handleRegister = () => {
        navigate("/register");
    }

    return (
        <>
            <div className="body">
                <p className="tagline">Got an errand to run? We'll do it for you</p>
                <img class="delivery_guy" src={Image} />
            </div>
            <button className="home_button" onClick={handleLogin}>Login</button>
            <button className="home_button" onClick={handleRegister}>Register</button>
        </>
    )
}

export default Body;