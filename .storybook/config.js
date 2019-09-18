import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { setConsoleOptions } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withA11y);
addDecorator(withKnobs);

addParameters({
  backgrounds: [
    { name: 'transparent', value: 'transparent', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
});

setConsoleOptions({
  panelExclude: [],
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module);
