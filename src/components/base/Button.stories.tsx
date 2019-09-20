import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from './Button';
import Cta from './Cta';

export default {
  title: 'Base|Button',
};

export const base = () => (
  <div>
    <Button onClick={action('clicked')}>
      {text('children', 'Hello Storybook')}
    </Button>
    <Cta
      to="/404
    "
    >
      {text('children', 'Hello Storybook')}
    </Cta>
  </div>
);

export const emoji = () => (
  <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
);
