import * as React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { Global, css } from '@emotion/core';
import { setConsoleOptions } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import normalize from '../src/styles/normalize';
import base from '../src/styles/base';

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

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

// Add globals styles
const withGlobal = cb => (
  <React.Fragment>
    <Global
      styles={css`
        ${normalize};
        ${base};
      `}
    />
    {cb()}
  </React.Fragment>
);
addDecorator(withGlobal);

setConsoleOptions({
  panelExclude: [],
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module);
