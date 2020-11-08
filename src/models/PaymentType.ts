import { PaymentTypeInterface, PaymentTypes } from 'interfaces/PaymentTypeInterface';

const TAX_PERCENTAGE = 0.13;

export class PaymentType implements PaymentTypeInterface {
  id: PaymentTypes;
  name: string;
  description: string;
  period: string;

  constructor(params: PaymentTypeInterface) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.period = params.period;
  }

  isPerMonthType() {
    return this.id === PaymentTypes.PerMonth;
  }

  calculateTaxFromAmountOnHand(salary: number): number {
    return Math.round(salary * TAX_PERCENTAGE / (1 - TAX_PERCENTAGE));
  }

  calculateTaxFromSalary(salary: number): number {
    return Math.round(salary * TAX_PERCENTAGE);
  }

  calculateSalaryIncludingTax(salary: number): number {
    const taxFromAmountOnHand = this.calculateTaxFromAmountOnHand(salary);

    return salary + taxFromAmountOnHand;
  }

  calculateSalaryExcludingTax(salary: number): number {
    const taxFromSalary = this.calculateTaxFromSalary(salary);

    return salary - taxFromSalary;
  }
}