import { PaymentTypes } from 'interfaces/PaymentTypeInterface';

import { PaymentType } from 'models/PaymentType';

export class PaymentTypeFactory{
  static createPerMonthPaymentType() {
    return new PaymentType({
      id: PaymentTypes.PerMonth,
      name: 'Оклад за месяц',
      description: '',
      period: ''
    })
  }

  static createPerHourPaymentType() {
    return new PaymentType({
      id: PaymentTypes.PerHour,
      name: 'Оплата за час',
      description: '',
      period: 'в час'
    });
  }

  static createPerDayPaymentType() {
    return new PaymentType({
      id: PaymentTypes.PerDay,
      name: 'Оплата за день',
      description: '',
      period: 'в день'
    });
  }

  static createMinimumWagPaymentType() {
    return new PaymentType({
      id: PaymentTypes.MinimumWage,
      name: 'МРОТ',
      description: 'МРОТ - минимальный размер оплаты труда. Разный для разных регионов',
      period: ''
    });
  }

  static getDefaultPaymentType() {
    return this.createPerMonthPaymentType();
  }

  static getAllPaymentTypes() {
    const perMonthPaymentType = this.createPerMonthPaymentType();
    const minimumWagPaymentType = this.createMinimumWagPaymentType();
    const perDayPaymentType = this.createPerDayPaymentType();
    const perHourPaymentType = this.createPerHourPaymentType();

    return [perMonthPaymentType, minimumWagPaymentType, perDayPaymentType, perHourPaymentType];
  }
}