export const COMPOUNDING_PERIODS: number = 1;

export function calculateCompoundInterest (
  depositAmount: number, 
  interestRate: number,
  days: number, 
  frequency: number): number {

    return parseFloat((frequency * depositAmount * (((Math.pow(1 + interestRate / COMPOUNDING_PERIODS, (COMPOUNDING_PERIODS * days/365) )) - 1) / (interestRate/ COMPOUNDING_PERIODS))).toFixed(2));
}

export function calculateCompoundInterest1 (depositAmount: number, interestRate: number, time: number, frequency: number): number {
  time = time/365
  const n = 12; // Compounded monthly

  return frequency * depositAmount * ((Math.pow((1 + interestRate / n), (n * time)) - 1) / (interestRate / n));
}

export function calculateCompoundInterest2 (
  depositAmount: number, 
  interestRate: number,
  days: number, 
  frequency: number): number {

    return frequency * depositAmount * (((Math.pow(1 + interestRate, days/365)) - 1) / interestRate);
}