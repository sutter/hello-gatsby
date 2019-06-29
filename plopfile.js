// Templates
const path = require('path');

const componentTemplate = `
import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Color } from '../../enums/appStyles';

interface {{componentName}}Props {
  children: React.ReactNode;
}

const {{componentName}}El = styled.div<{{componentName}}Props>\`\`;

const {{componentName}}: React.FunctionComponent<{{componentName}}Props> = ({ children, ...rest }) => (
  <{{componentName}}El {...rest}>{children}</{{componentName}}El>
);

export default {{componentName}};
`;

module.exports = function(plop) {
  plop.addPrompt('directory', require('inquirer-directory'));
  // Add helpers
  plop.addHelper('componentsPath', function(p) {
    return path.resolve(plop.getPlopfilePath() + '/src/components', p);
  });

  // Component generator
  plop.setGenerator('component', {
    description: 'create a new react component',
    prompts: [
      {
        type: 'directory',
        name: 'path',
        message: 'where would you like to put this component?',
        basePath: plop.getPlopfilePath() + '/src/components',
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Pick a name for the component (UpperCamelCase)',
        validate: function(value) {
          if (/.+/.test(value)) {
            if (/([A-Z][a-z0-9]+)+/.test(value)) {
              return true;
            } else {
              return 'format is invalid';
            }
          } else {
            return 'file name is required';
          }
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{componentsPath path}}/{{componentName}}.tsx',
        template: componentTemplate,
      },
    ],
  });
};
