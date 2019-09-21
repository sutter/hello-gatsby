import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import NavButton from './NavButton';

export default {
  title: 'Base|NavButton',
};

export const base = () => (
  <NavButton
    navOpen={boolean('navOpen', false)}
    onClick={action('button clicked')}
  />
);
