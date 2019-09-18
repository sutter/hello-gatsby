import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
};

export const base = () => (
  <Button onClick={action('clicked')}>
    {text('Label', 'Hello Storybook')}
  </Button>
);

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
