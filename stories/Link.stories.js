import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import AppLink from '../src/components/atoms/Link';

storiesOf('Atom|Link', module).add('base', () => (
  <AppLink
    to={text('to', 'http://sutterlity.fr')}
    disabled={boolean('disabled', false)}
  >
    {text('children', 'Laurent Sutterlity')}
  </AppLink>
));
