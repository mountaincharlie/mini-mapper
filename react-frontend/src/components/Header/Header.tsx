import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return(
    <div className="header">
      <div className="header-logo">
        MiniMapper
      </div>

      <div className="header-pages">
        <ul className="header-pages-list">
          <li><NavLink 
            to="/form" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Form
          </NavLink></li>
          <li><NavLink 
            to="/results" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Results
          </NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;

