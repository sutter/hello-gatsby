import React from 'react';
import { text } from '@storybook/addon-knobs';
import Title from './Title';

const TitleProps = () => ({
  children: text('Children', 'Hello world'),
});

export default {
  title: 'Base|Title',
};

export const base = () => <Title {...TitleProps()} />;
