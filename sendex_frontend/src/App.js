import './App.css';
import Header from './header';
import LoginForm from './login';
import Boot_login from './boot_login'
import Hero from './hero';
import Form from './form';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
      <div className='home-left'>
      <Header/>
      </div>
      <div className='hero-section'>
        <Hero/>
      </div>
      <div className='home-right'>
      
      </div>

      <section className='next'>
        <Form/>
      </section>
      
      
      </div>
    </div>
    
  );
}

export default App;
