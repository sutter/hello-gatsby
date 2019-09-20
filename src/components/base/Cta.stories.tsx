import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Cta from './Cta';

const CtaProps = () => ({
  children: text('Children', 'Cta'),
  disabled: boolean('disabled', false),
  to: text('to', 'https://www.sutterlity.fr'),
});

export default {
  title: 'Base|Cta',
};

export const base = () => <Cta {...CtaProps()} />;

export const themePrimary = () => <Cta theme="primary" {...CtaProps()} />;

export const themeNeutral = () => <Cta theme="neutral" {...CtaProps()} />;

export const sizeM = () => <Cta size="M" {...CtaProps()} />;

export const sizeS = () => <Cta size="S" {...CtaProps()} />;
