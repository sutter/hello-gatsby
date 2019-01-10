import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/components';
import { Global, css } from '@emotion/core';
import base from '../src/styles/base';
import normalize from '../src/styles/normalize';

addDecorator(
  withOptions({
    theme: themes.dark,
    hierarchyRootSeparator: /\|/,
  }),
);

addDecorator(withKnobs);
addDecorator(withInfo);

addDecorator(story => (
  <div>
    <Global
      styles={css`
        ${normalize}
        ${base}
        body {
          overflow: auto !important;
        }
      `}
    />
    <div
      style={{
        padding: 40,
      }}
    >
      {story()}
    </div>
  </div>
));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
