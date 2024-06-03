import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
//import Header from './components/Header';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* render Navbar component here so it persists */}
                {/* accross all screens */}
                <Route index element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
