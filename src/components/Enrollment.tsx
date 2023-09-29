import React from 'react';
import { useNavigate } from 'react-router-dom';
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

  const { register, handleSubmit, formState: {errors}, submit } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('data', data);
    console.log('e', errors);
    navigate('calculator');
  }

  return (
    <div className='enrollment'>
      <h3 className='title'>New Direct Deposit Enrollment</h3>
      
      <form className='enrollment-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-component'>
        <label htmlFor="accountNumber">Account Number:</label>
        <input 
          id="accountNumber" {...register('accountNumber', {
          required: 'Account number is required',
          minLength: {value: 8, message: 'Account Number must be 8 or more digits.'},
          maxLength: {value: 17, message: 'Account Number must be under 17 digits.'},
          pattern: {
            value: /^[0-9]*$/,
            message: 'Account Number must be a number.'
          }
        })} />
        <p>{errors.accountNumber?.message}</p>
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
      <button className='blue-button' type='submit' role='button' onClick={() => console.log(errors)}>
        Submit
      </button>
    </form>
      
    </div>
  );
};

export default Enrollment;
