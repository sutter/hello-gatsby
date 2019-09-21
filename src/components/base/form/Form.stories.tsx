import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from './Form';
import FormField from './FormField';
import FormSubmit from './FormSubmit';
import InputBase from '../input/InputBase';
import Button from '../Button';

export default {
  title: 'Base|Form',
};

export const base = () => (
  <Form>
    <FormField label="Label 1">
      <InputBase type="text" placeholder="Your name" />
    </FormField>
    <FormField label="Label 2">
      <InputBase type="email" placeholder="Your email" />
    </FormField>
    <FormSubmit>
      <Button onClick={action('button clicked')}>Valider</Button>
    </FormSubmit>
  </Form>
);
