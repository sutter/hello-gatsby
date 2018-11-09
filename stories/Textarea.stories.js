import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import Textarea from '../src/components/atoms/Textarea';

storiesOf('Atom|Textarea', module).add('base', () => (
  <Textarea
    placeholder={text('placeholder', 'Placeholder')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    onChange={action('onChange')}
  >
    pppp
  </Textarea>
));
