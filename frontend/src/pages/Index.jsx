import Login from './Login';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import './Index.css';

function Index() {
  return (
    <div className="home">
        <Navbar />
        <Body />
        <Footer />
    </div>
  )
}

export default Index
