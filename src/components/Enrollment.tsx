import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import './Enrollment.scss';
import '../shared-styles.scss';

type FormData = {
  accountNumber: string;
  routingNumber: string;
  depositAmount: string;
  frequency: number;
}

const Enrollment: React.FC = () => {

  const { control, register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {

    navigate('/interest-calculator/calculator', {state: {formData: data}});
  }

  return (
    <div className='enrollment'>
      <h3 className='title'>New Direct Deposit Enrollment</h3>
      
      <form className='enrollment-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-component'>
        <label htmlFor="accountNumber">Account Number:</label>
        <input 
          id="accountNumber"
          type='number'
          pattern="[0-9]*"
          placeholder='12345678'
          {...register('accountNumber', {
          required: 'Account number is required.',
          minLength: {value: 8, message: 'Account Number must be 8 or more digits.'},
          maxLength: {value: 17, message: 'Account Number must be fewer than 17 digits.'},
          pattern: {
            value: /^[0-9]*$/,
            message: 'Account Number must be a number.'
          }
        })} />
        <div className='error-message'>{errors.accountNumber?.message}</div>
      </div>
      <div className='form-component'>
        <label htmlFor="routingNumber">Routing Number:</label>
        <input 
          id="routingNumber"
          type='number'
          pattern="[0-9]*"
          placeholder='123456789'
          {...register('routingNumber', {
            required: 'Routing number is required.',
            minLength: {value: 9, message: 'Missing numbers. Routing Number must be 9 digits.'},
            maxLength: {value: 9, message: 'Excessive numbers. Routing Number must be 9 digits.'},
            pattern: {
              value: /^(00|0[1-9]|1[0-2]|2[1-9]|3[0-2]|6[1-9]|7[0-2]|80)\d{7}$/,
              message: 'Invalid routing number.'
            }
          })}
        />
        <div className='error-message'>{errors.routingNumber?.message}</div>
      </div>
      <div className='form-component'>
        <label htmlFor="depositAmount">Deposit Amount:</label>
        <Controller
          name="depositAmount"
          control={control}
          render={({ field: { ref, ...rest } }) => {
            return(
            <NumericFormat
              id="depositAmount"
              placeholder='0.00'
              thousandSeparator=","
              decimalSeparator="."
              prefix="$ "
              decimalScale={2}
              getInputRef={ref}
              required
              {...rest}
            />
          )}}
          rules={{
            validate: {
              required: value => !!value || 'Deposit Amount is required.',
              greaterThanZero: value => parseFloat(value.slice(2)) > 0 || `Amount must be greater than 0.`,
            }
          }}
        />
        <div className='error-message'>{errors.depositAmount?.message}</div>

      </div>

      <div className='form-component'>
        <label htmlFor="frequency">Frequency:</label>
        <select id="frequency" {...register('frequency')}>
          <option value={1}>Once per month</option>
          <option value={2}>Twice per month</option>
        </select>
      </div>
      <input className='blue-button' type='submit' role='button'/>
    </form>
      
    </div>
  );
};

export default Enrollment;
