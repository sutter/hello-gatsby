import React from 'react';
import { text } from '@storybook/addon-knobs';
import Time from './Time';

const TimeProps = () => ({
  children: text('Children', 'November 30, 2018'),
});

export default {
  title: 'Base|Time',
};

export const base = () => <Time {...TimeProps()} />;
