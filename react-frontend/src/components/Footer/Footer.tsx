import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
  return(
    <div className="footer">
      <ul className="footer-links">
        <li><a href="https://www.mapimpact.io/" target="_blank">Map Impact</a></li>
        <li><a href="https://github.com/mountaincharlie/mini-mapper" target="_blank">GitHub</a></li>
        <li><a href="https://www.linkedin.com/company/map-impact" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
  )
}

export default Footer;

