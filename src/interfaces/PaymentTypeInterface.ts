export enum PaymentTypes {
  PerMonth,
  PerDay,
  PerHour,
  MinimumWage,
}

export interface PaymentTypeInterface {
  id: PaymentTypes,
  name: string,
  description: string,
  period: string,
}