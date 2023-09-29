const COMPOUNDING_PERIODS: number = 12;

export function calculateCompoundInterest (
  depositAmount: number, 
  interestRate: number, // 0.05, or 5%
  days: number, 
  frequency: number): number {
    return parseFloat((frequency * depositAmount * (((Math.pow(1 + interestRate / COMPOUNDING_PERIODS, (COMPOUNDING_PERIODS * days) / 365)) - 1) / (interestRate/ COMPOUNDING_PERIODS))).toFixed(2));
}
