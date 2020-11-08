import React from 'react';
import NumberFormat from 'react-number-format';

import { PaymentType } from 'models/PaymentType'

import classes from './styles.module.css';

interface SalaryInfoInterface {
  salaryAmount: number,
  isTaxUsed: boolean,
  paymentType: PaymentType,
}

export const SalaryInfo = (props: SalaryInfoInterface) => {
  const { salaryAmount, paymentType, isTaxUsed } = props;

  if(!paymentType.isPerMonthType()) {
    return null;
  } 

  return (
    <ul className={classes.root}>
      <li>
        <span className={classes.salaryAmount}>
          <NumberFormat value={isTaxUsed ? paymentType.calculateSalaryExcludingTax(salaryAmount) : salaryAmount} displayType="text" thousandSeparator={' '} /> ₽
        </span>
        {` сотрудник будет получать на руки`}
      </li>
      <li>
        <span className={classes.salaryAmount}>
          <NumberFormat value={isTaxUsed ? paymentType.calculateTaxFromSalary(salaryAmount) : paymentType.calculateTaxFromAmountOnHand(salaryAmount)} displayType="text" thousandSeparator={' '} /> ₽
        </span>
        {` НДФЛ, 13% от оклада`}
      </li>
      <li>
        <span className={classes.salaryAmount}>
          <NumberFormat value={isTaxUsed ? salaryAmount : paymentType.calculateSalaryIncludingTax(salaryAmount)} displayType="text" thousandSeparator={' '} /> ₽  
        </span>
        {` за сотрудника в месяц`}
      </li>
    </ul>
  )
};
