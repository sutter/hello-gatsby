import React from 'react';
import styled from '@emotion/styled';
import * as input from '../../../styles/inputs';
import { InputBasicInterface } from '../../../appInterface';

interface InputSelectProps extends InputBasicInterface {
  multiple?: boolean;
  size?: number;
}

const Element = styled.select`
  ${input.inputBase};
  padding-left: ${input.paddingHorizontal};
  padding-right: 4.5rem;
  line-height: ${input.inputHeight};
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="%23ddd" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path></svg>');
  background-repeat: no-repeat;
  background-position: right 1.5rem center;
  ${input.inputDisabled};
`;

const InputSelect: React.FunctionComponent<InputSelectProps> = props => (
  <Element {...props} />
);

export default InputSelect;
