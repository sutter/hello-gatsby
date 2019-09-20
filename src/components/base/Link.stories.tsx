import React from 'react';
import { text } from '@storybook/addon-knobs';
import Link from './Link';

const LinkProps = () => ({
  children: text('Children', 'Link'),
  to: text('to', 'https://www.sutterlity.fr'),
});

export default {
  title: 'Base|Link',
};

export const base = () => <Link {...LinkProps()} />;
