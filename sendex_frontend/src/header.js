import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='wrapper'>
    <div className='Header-left'> 
      <h1>Logo</h1>

    
    </div>
    <div className='header-mid'> 
    <nav>
    <ul className='nav-list'>
    <li className='logo'>Sendex</li>
    <li className='Home' >Home</li>
    <li className='About'>About</li>
    <li className='Contact'>Contact-Us</li>
    </ul>
      </nav>
    </div>
    <p className='text'> lorem ipsum </p>
    <div className='header-right'> Links </div>

    </div>
  )
}

export default Header