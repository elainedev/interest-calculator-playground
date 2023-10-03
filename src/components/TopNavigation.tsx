import React from 'react';
import { Link } from 'react-router-dom';

import './TopNavigation.scss';

const TopNavigation: React.FC = () => {
  return (
    <div className="top-navigation">
      <div className="menu-items">
        <Link to='/' className="menu-item">Sign In</Link>
        <Link to='/' className="menu-item">En Espanol</Link>
        <Link to='/' className="menu-item">Locations</Link>
        <Link to='/' className="menu-item">Contact Us</Link>
        <Link to='/' className="menu-item">Help</Link>
      </div>
    </div>
  );
};

export default TopNavigation;
