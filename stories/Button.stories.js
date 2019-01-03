import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import Button from '../src/components/atoms/Button';

storiesOf('Atom|Button', module).add('base', () => (
  <Button
    as={select('as', ['a', 'button', 'div'], 'button')}
    href={text('href', 'http://sutterlity.fr')}
    disabled={boolean('disabled', false)}
  >
    {text('children', 'My button')}
  </Button>
));
