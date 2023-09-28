import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';
import '../shared-styles.scss';

const Welcome: React.FC = () => {
  return (
    <div className='welcome'>
      <h1 className='greeting'>Welcome to Bank of Trayt</h1>
      <p className='prompt'>Initiate a new Direct Deposit to earn 5% for 36 months!</p>
      <Link className='blue-button' to='enrollment' role='button'>
        Learn More
      </Link>
    </div>
  );
};

export default Welcome;
