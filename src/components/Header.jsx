import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header container">
      <div className="col-left">
        <h1 className="header__main-header">
          <Link to="/news-feed?page=1" title="home">
            hackernewsUI
          </Link>
        </h1>
      </div>
    </div>
  </header>
);

export default Header;
