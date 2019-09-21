import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InputBase from './InputBase';
import InputSelect from './InputSelect';
import InputTextarea from './InputTextarea';
import InputCheckbox from './InputCheckbox';
import InputRadio from './InputRadio';
import InputLabel from './InputLabel';

const baseProps = () => ({
  disabled: boolean('disabled', false),
  onChange: action('input onchange'),
});

export default {
  title: 'Base|Input',
};

export const base = () => (
  <InputBase type="text" placeholder="your name" {...baseProps()} />
);

export const select = () => (
  <InputSelect {...baseProps()}>
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </InputSelect>
);

export const textarea = () => (
  <InputTextarea placeholder="your message" {...baseProps()} />
);

export const checkbox = () => (
  <InputCheckbox checked={boolean('checked', false)} {...baseProps()}>
    {text('children', 'Input checkbox')}
  </InputCheckbox>
);

export const radio = () => (
  <InputRadio checked={boolean('checked', false)} {...baseProps()}>
    {text('children', 'Input radio')}
  </InputRadio>
);

export const label = () => <InputLabel>Label</InputLabel>;
