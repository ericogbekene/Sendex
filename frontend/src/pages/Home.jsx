import Login from './Login';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import './Home.css';
import Featured from '../components/featured';
import Cta from '../components/cta';

function Home() {
  return (
    <div className="home">
        <Navbar />
        <Body />
        <Featured/>
        <Cta/>
        <Footer />
    </div>
  )
}

export default Home
