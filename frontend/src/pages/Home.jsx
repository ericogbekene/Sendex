import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Orders from '../components/Orders';
import './Index.css';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Orders />
            <Footer />
        </div>
    )
}

export default Home