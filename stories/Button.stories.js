import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import Button, { sizes, themes } from '../src/components/base/Button';

storiesOf('Base|Button', module).add('base', () => (
  <Button
    as={select('as', ['a', 'button', 'div'], 'button')}
    href={text('href', 'http://sutterlity.fr')}
    disabled={boolean('disabled', false)}
    theme={select('theme', Object.keys(themes), Object.keys(themes)[0])}
    size={select('size', Object.keys(sizes), Object.keys(sizes)[0])}
  >
    {text('children', 'My button')}
  </Button>
));
