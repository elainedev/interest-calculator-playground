import React from 'react';
import './SideMenu.scss';

const SideMenu: React.FC = () => {
  return (
    <div className="side-menu">
      <ul>
        <li>Personal</li>
        <li>Small Business</li>
        <li>Wealth Management</li>
        <li>Business & Institutions</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

export default SideMenu;
