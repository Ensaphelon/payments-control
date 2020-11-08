import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form } from 'components/Payments/Form';

const handleSubmit = (values: object) => {
  console.warn(values);
}

export const App = () => {
  return <Form onSubmit={handleSubmit} />
}

