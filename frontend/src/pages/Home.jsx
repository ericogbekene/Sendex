import Login from './Login';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
        <Navbar />
        <Body />
        <Footer />
    </div>
  )
}

export default Home
