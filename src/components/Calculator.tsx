import React from 'react';
import { Link } from 'react-router-dom';
// import './Welcome.scss';
import '../shared-styles.scss';

const Calculator: React.FC = () => {
  return (
    <div className='Calculator'>
      <h1 className='greeting'>Calculator to Bank of Trayt</h1>
      <p className='prompt'>Initiate a new Direct Deposit to earn 5% for 36 months!</p>
      <Link className='blue-button' to='enrollment' role='button'>
        Learn More
      </Link>
    </div>
  );
};

export default Calculator;

