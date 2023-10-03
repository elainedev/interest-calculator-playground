import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

const SideMenu: React.FC = () => {
  return (
    <div className="side-menu">
      <ul>
        <Link to='/' className='item'>Personal</Link>
        <Link to='/' className='item'>Small Business</Link>
        <Link to='/' className='item'>Wealth Management</Link>
        <Link to='/' className='item'>Business & Institutions</Link>
        <Link to='/' className='item'>About Us</Link>
      </ul>
    </div>
  );
};

export default SideMenu;
