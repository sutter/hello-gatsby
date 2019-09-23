import React from 'react';
import { text } from '@storybook/addon-knobs';
import Tag from './Tag';

const TagProps = () => ({
  children: text('Children', 'Tag'),
  to: text('to', 'https://www.sutterlity.fr'),
});

export default {
  title: 'Base|Tag',
};

export const base = () => <Tag {...TagProps()} />;
