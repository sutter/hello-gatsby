import React from 'react';
import { text } from '@storybook/addon-knobs';
import Image from './Image';

const ImageProps = () => ({
  alt: text('alt', 'Placeholder'),
  src: text('src', 'https://placeimg.com/640/480/animals'),
});

export default {
  title: 'Base|Image',
};

export const base = () => <Image {...ImageProps()} />;
