import { PaymentTypeFactory } from 'factories/PaymentTypeFactory'
import { PaymentType } from 'models/PaymentType'

export interface PaymentsFormValuesInterface {
  paymentType: PaymentType,
  isTaxUsed: boolean,
  salaryAmount: number,
}

export const initialValues: PaymentsFormValuesInterface = {
  paymentType: PaymentTypeFactory.getDefaultPaymentType(),
  isTaxUsed: false,
  salaryAmount: 0,
}