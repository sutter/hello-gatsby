import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import InputLabel from '../src/components/base/input/InputLabel';
import InputBase from '../src/components/base/input/InputBase';
import InputTextarea from '../src/components/base/input/InputTextarea';
import InputSelect from '../src/components/base/input/InputSelect';
import InputRadio from '../src/components/base/input/InputRadio';
import InputCheckbox from '../src/components/base/input/InputCheckbox';

storiesOf('Base|Input/InputLabel', module).add('base', () => (
  <InputLabel>{text('children', 'Label')}</InputLabel>
));

storiesOf('Base|Input/InputBase', module).add('base', () => (
  <InputBase
    type={select('type', ['text', 'password', 'number', 'tel'], 'text')}
    value={text('value', '')}
    placeholder={text('placeholder', 'Placeholder')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    onChange={action('onChange')}
  />
));

storiesOf('Base|Input/InputTextarea', module).add('base', () => (
  <InputTextarea
    placeholder={text('placeholder', 'Placeholder')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    onChange={action('onChange')}
  />
));

storiesOf('Base|Input/InputSelect', module).add('base', () => (
  <InputSelect>
    <option value="value1">Value 1</option>
    <option value="value2" defaultValue>
      Value 2
    </option>
    <option value="value3">Value 3</option>
  </InputSelect>
));

storiesOf('Base|Input/InputRadio', module).add('base', () => (
  <InputRadio
    checked={boolean('checked', false)}
    onChange={action('onChange')}
    disabled={boolean('disabled', false)}
  >
    {text('children', 'Children')}
  </InputRadio>
));

storiesOf('Base|Input/InputCheckbox', module).add('base', () => (
  <InputCheckbox
    checked={boolean('checked', false)}
    onChange={action('onChange')}
    disabled={boolean('disabled', false)}
  >
    {text('children', 'Children')}
  </InputCheckbox>
));
