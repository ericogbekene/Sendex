import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import UserAccount from './pages/userAccount'
import NewOrder from './pages/newOrder'

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Index />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/my_account" element={<UserAccount />} />
                <Route path="/new_order" element={<NewOrder />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
