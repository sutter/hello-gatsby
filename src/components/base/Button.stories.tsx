import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

const buttonProps = () => ({
  children: text('Children', 'Button'),
  disabled: boolean('disabled', false),
  onClick: action('button clicked'),
});

export default {
  title: 'Base|Button',
};

export const base = () => <Button {...buttonProps()} />;

export const themePrimary = () => <Button theme="primary" {...buttonProps()} />;

export const themeNeutral = () => <Button theme="neutral" {...buttonProps()} />;

export const sizeM = () => <Button size="M" {...buttonProps()} />;

export const sizeS = () => <Button size="S" {...buttonProps()} />;
