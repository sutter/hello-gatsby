import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import InputLabel from '../src/components/atoms/input/InputLabel';
import InputBase from '../src/components/atoms/input/InputBase';
import InputTextarea from '../src/components/atoms/input/InputTextarea';
import InputSelect from '../src/components/atoms/input/InputSelect';
import InputRadio from '../src/components/atoms/input/InputRadio';
import InputCheckbox from '../src/components/atoms/input/InputCheckbox';

storiesOf('Atom|Input/InputLabel', module).add('base', () => (
  <InputLabel>{text('children', 'Label')}</InputLabel>
));

storiesOf('Atom|Input/InputBase', module).add('base', () => (
  <InputBase
    type={select('type', ['text', 'password', 'number', 'tel'], 'text')}
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

storiesOf('Atom|Input/InputSelect', module).add('base', () => (
  <InputSelect>
    <option value="value1">Value 1</option>
    <option value="value2" defaultValue>
      Value 2
    </option>
    <option value="value3">Value 3</option>
  </InputSelect>
));

storiesOf('Atom|Input/InputRadio', module).add('base', () => (
  <InputRadio
    checked={boolean('checked', false)}
    onChange={action('onChange')}
    disabled={boolean('disabled', false)}
  >
    {text('children', 'Children')}
  </InputRadio>
));

storiesOf('Atom|Input/InputCheckbox', module).add('base', () => (
  <InputCheckbox
    checked={boolean('checked', false)}
    onChange={action('onChange')}
    disabled={boolean('disabled', false)}
  >
    {text('children', 'Children')}
  </InputCheckbox>
));
