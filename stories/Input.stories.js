import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import InputBase, { types } from '../src/components/atoms/input/InputBase';
import InputTextarea from '../src/components/atoms/input/InputTextarea';

storiesOf('Atom|Input/InputBase', module).add('base', () => (
  <InputBase
    type={select('type', types, types[0])}
    value={text('value', '')}
    placeholder={text('placeholder', 'Placeholder')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    onChange={action('onChange')}
  />
));
storiesOf('Atom|Input/InputTextarea', module).add('base', () => (
  <InputTextarea
    placeholder={text('placeholder', 'Placeholder')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    onChange={action('onChange')}
  />
));
