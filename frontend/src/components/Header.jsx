import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header>
      <h1>Errand Dashboard</h1>
      <nav>
        <a href="#" onClick={onLogout}>Logout</a>
      </nav>
    </header>
  );
};

export default Header;
