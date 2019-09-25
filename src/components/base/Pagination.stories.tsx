import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Pagination from './Pagination';

export default {
  title: 'Base|Pagination',
};

export const base = () => (
  <Pagination
    isFirst={boolean('isFirst', false)}
    isLast={boolean('isLast', false)}
    nextPageUrl="/"
    prevPageUrl="/"
  />
);
