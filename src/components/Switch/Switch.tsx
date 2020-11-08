import React from 'react';
import classnames from 'classnames';

import { Form } from 'react-bootstrap';

import classes from './styles.module.css';

interface SwitchInterface {
  id: string,
  name: string,
  checked: boolean,
  turnOffLabel: string,
  turnOnLabel: string,
  onSetFieldValue(name: string, value: boolean): void,
}

export const Switch = (props: SwitchInterface) => {
  const { id, name, checked, turnOffLabel, turnOnLabel, onSetFieldValue } = props;

  const turnOff = () => onSetFieldValue(name, true);

  const turnOn = () => onSetFieldValue(name, false);

  const toggleValue = () => {
    onSetFieldValue(name, checked);
  }

  const turnOnButtonClassName = classnames({ [classes.button]: true, [classes.active]: checked })
  const turnOffButtonClassName = classnames({ [classes.button]: true, [classes.active]: !checked })

  return (
    <div className={classes.root}>
      <button className={turnOffButtonClassName} type="button" onClick={turnOff}>{turnOffLabel}</button>
      <Form.Check className={classes.switch} type="switch" id={id} name={name} checked={checked} onChange={toggleValue} />
      <button className={turnOnButtonClassName} type="button" onClick={turnOn}>{turnOnLabel}</button>
    </div>
  );
}

