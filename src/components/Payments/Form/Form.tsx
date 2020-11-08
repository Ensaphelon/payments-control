import React from 'react'
import { useFormik } from 'formik';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import { PaymentTypeFactory } from 'factories/PaymentTypeFactory'

import { initialValues } from 'forms/payments';

import { Switch } from 'components/Switch';
import { SalaryInfo } from 'components/SalaryInfo';

import { PaymentTypeOption } from './PaymentTypeOption';

import classes from './styles.module.css';

const paymentTypes = PaymentTypeFactory.getAllPaymentTypes();

interface FormInterface {
  onSubmit(values: object): void
}

export const Form = (props: FormInterface) => {
  const { values, handleSubmit, setFieldValue } = useFormik({ initialValues, onSubmit: props.onSubmit });

  const handleChangePaymentAmount = (numberFormatValues: NumberFormatValues) => {
    setFieldValue('salaryAmount', numberFormatValues.floatValue);
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      {paymentTypes.map((paymentType) => (
        <PaymentTypeOption key={paymentType.id} value={String(values.paymentType.id)} onChange={setFieldValue} paymentType={paymentType} />
      ))}
      <div className={classes.switch}>
        <Switch id="isTaxUsed" name="isTaxUsed" checked={!values.isTaxUsed} turnOffLabel="Указать с НДФЛ" turnOnLabel="Без НДФЛ" onSetFieldValue={setFieldValue} />
      </div>
      <div className={classes.salaryField}>
        <NumberFormat allowNegative={false} value={values.salaryAmount} displayType="input" thousandSeparator={' '} onValueChange={handleChangePaymentAmount} />
        <span className={classes.period}>{`₽ ${values.paymentType.period}`}</span>
      </div>
      {values.salaryAmount > 0 && (
        <div className={classes.salaryInfo}>
          <SalaryInfo paymentType={values.paymentType} salaryAmount={values.salaryAmount} isTaxUsed={values.isTaxUsed} />
        </div>
      )}
    </form>
  )
} 

