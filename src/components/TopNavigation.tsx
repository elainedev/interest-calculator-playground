import React from 'react';
import './TopNavigation.scss';

const TopNavigation: React.FC = () => {
  return (
    <div className="top-navigation">
      <div className="menu-items">
        <span className="menu-item">Sign In</span>
        <span className="menu-item">En Espanol</span>
        <span className="menu-item">Locations</span>
        <span className="menu-item">Contact Us</span>
        <span className="menu-item">Help</span>
      </div>
    </div>
  );
};

export default TopNavigation;
