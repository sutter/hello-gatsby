import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

const buttonProps = () => ({
  children: text('Children', 'Button'),
  disabled: boolean('disabled', false),
  onClick: action('button click'),
});

export default {
  title: 'Base|Button',
};

export const base = () => (
  <Button onClick={action('clicked')} {...buttonProps()} />
);

export const themePrimary = () => (
  <Button theme="primary" onClick={action('clicked')} {...buttonProps()} />
);

export const themeNeutral = () => (
  <Button theme="neutral" onClick={action('clicked')} {...buttonProps()} />
);

export const sizeM = () => (
  <Button size="M" onClick={action('clicked')} {...buttonProps()} />
);

export const sizeS = () => (
  <Button size="S" onClick={action('clicked')} {...buttonProps()} />
);
