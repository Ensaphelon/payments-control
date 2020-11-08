import React, { useState } from 'react'
import { Form, OverlayTrigger, Popover } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import { PaymentTypeInterface } from 'interfaces/PaymentTypeInterface';

import { PaymentType } from 'models/PaymentType';

import classes from './styles.module.css';

interface PaymentTypeOptionInterface {
  onChange(name: string, value: PaymentTypeInterface): void,
  paymentType: PaymentType,
  value: string,
}

export const PaymentTypeOption = (props: PaymentTypeOptionInterface) => {
  const [descriptionLocked, setDescriptionLocked] = useState(false);
  const { paymentType, value, onChange } = props;
  const { id, name, description } = paymentType;

  const handleClickIconDscription = () => {
    setDescriptionLocked(!descriptionLocked);
  }

  const handleChangePaymentType = () => {
    onChange('paymentType', paymentType);
  }

  return (
    <div className={classes.root}>
      <Form.Group className={classes.formGroup} controlId={String(id)}>
        <Form.Check className={classes.radio} type="radio" label={name} checked={value === String(paymentType.id)} onChange={handleChangePaymentType} name="paymentType" />
      </Form.Group>
      {description && (
        <OverlayTrigger
          trigger={descriptionLocked ? 'click' : ['hover', 'focus']}
          key="bottom-start"
          placement={"bottom-start"}
          overlay={
            <Popover id={`popover-positioned-bottom-start`} className={classes.popover}>
              <Popover.Content className={classes.description}>
                {description}
              </Popover.Content>
            </Popover>
          }
        >
          <button className={classes.buttonIcon} onClick={handleClickIconDscription}>
            <FontAwesomeIcon className={classes.icon} icon={descriptionLocked ? faTimesCircle : faInfoCircle} />
          </button>
        </OverlayTrigger>
      )}
    </div>
  )
}