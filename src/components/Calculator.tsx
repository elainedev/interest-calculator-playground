/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { calculateCompoundInterest } from '../formula';
import './Calculator.scss';
import '../shared-styles.scss';

const INTEREST_RATE_1: number = 0.05; // first 36 months
const INTEREST_RATE_2: number = 0.02; // after 36 months
const MILLISECONDS_IN_A_DAY: number = 24 * 60 * 60 * 1000;
const HIGH_INTEREST_MONTHS: number = 36;
const HIGH_INTEREST_DAYS : number = Math.round(HIGH_INTEREST_MONTHS * 30.417)

const Calculator: React.FC = () => {
  const location = useLocation();
  const enrollmentFormData = location.state?.formData;

  const { frequency } = enrollmentFormData;
  let { depositAmount } = enrollmentFormData;
  depositAmount = parseFloat(depositAmount.split(' ')[1].replace(/,/g, ''));
  const [startingDate, setStartingDate] = useState<Date | null>();
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [elapsedDays, setElapsedDays] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const today = new Date()
    const timeDiff = selectedDate ? selectedDate?.valueOf() - today.valueOf() : null;

    if (timeDiff) {
      setElapsedDays(Math.max(0, timeDiff)/MILLISECONDS_IN_A_DAY)
    }

  }, [selectedDate, startingDate])

  useEffect(() => {
    const first36MonthsInterest: number = calculateCompoundInterest(
      depositAmount, 
      INTEREST_RATE_1, 
      Math.min(elapsedDays, HIGH_INTEREST_DAYS), 
      frequency 
    );
    let post36MonthsInterest: number = 0;

    if ( elapsedDays > HIGH_INTEREST_DAYS ) {
      post36MonthsInterest = calculateCompoundInterest(
        depositAmount, 
        INTEREST_RATE_2, 
        elapsedDays - HIGH_INTEREST_DAYS, 
        frequency 
      )
    }
    setTotalInterest(
      first36MonthsInterest + post36MonthsInterest
    )
  }, [selectedDate, elapsedDays]);


  return (
    <div className='calculator'>
      <h3 className='title'>Compound Interest Calculator</h3>
      <p><i>Select a date</i></p>
      <DatePicker
        dateFormat='dd/MM/yyyy'
        minDate={new Date()}
        onChange={(date) => date && setSelectedDate(date)}
        selected={selectedDate}
        inline
      />
      <button className='blue-button' onClick={() => setStartingDate(new Date())}>
        Calculate!
      </button>

      <div className='date-info'>
      {selectedDate && <span>{`Total interest to be earned on ${selectedDate?.toLocaleDateString('en-US', {
        month: "long",
        day: "numeric",
        year: "numeric"
        })}:`}
      </span>}
      </div>
      <div className='interest-amount'>
        {`$${totalInterest}`}
      </div>
    </div>
  );
};

export default Calculator;

