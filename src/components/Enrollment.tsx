import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import './Enrollment.scss';
import '../shared-styles.scss';

type FormData = {
  accountNumber: string;
  routingNumber: string;
  amount: string;
  frequency: string;
}

const Enrollment: React.FC = () => {

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission logic here
  }

  return (
    <div className='enrollment'>
      <h3 className='title'>New Direct Deposit Enrollment</h3>
      
      <form className='enrollment-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-component'>
        <label htmlFor="accountNumber">Account Number:</label>
        <input type="text" id="accountNumber" {...register('accountNumber')} />
      </div>
      <div className='form-component'>
        <label htmlFor="routingNumber">Routing Number:</label>
        <input type="text" id="routingNumber" {...register('routingNumber')} />
      </div>
      <div className='form-component'>
        <label htmlFor="amount">Amount:</label>
        <input type="text" id="amount" {...register('amount')} />
      </div>
      <div className='form-component'>
        
        <label htmlFor="frequency">Frequency:</label>
        <select id="frequency" {...register('frequency')}>
          <option value="oncePerMonth">Once per month</option>
          <option value="twicePerMonth">Twice per month</option>
        </select>
      </div>
      {/* <button className='blue-button' to='calculator' role='button'>
        Submit
      </button> */}
      <Link className='blue-button' to='calculator' role='button'>
        Submit
      </Link>
    </form>
      
    </div>
  );
};

export default Enrollment;
