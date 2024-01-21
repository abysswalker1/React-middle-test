import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className='header__nav'>
          <Link to='/catalog'>
            Главная
          </Link>
          <Link to='/cart'>
            Корзина
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;