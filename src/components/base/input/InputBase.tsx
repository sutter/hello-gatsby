import React, { SFC } from 'react';
import styled from '@emotion/styled';
import * as input from '../../../styles/inputs';
import { InputBasic, InputEditable } from '../../../constants/interface';

type InputBaseTypes =
  | 'text'
  | 'password'
  | 'email'
  | 'tel'
  | 'number'
  | 'url'
  | 'date'
  | 'month'
  | 'week'
  | 'time';
interface ElementProps {
  type: InputBaseTypes;
  size?: number;
}

const Element = styled.input<ElementProps>`
  ${input.inputBase};
  padding: 0 ${input.paddingHorizontal};
  line-height: 1.5;
  ${input.inputDisabled};
  ${input.inputReadOnly};
`;

const InputBase: SFC<ElementProps & InputBasic & InputEditable> = props => (
  <Element {...props} />
);

InputBase.defaultProps = {
  type: 'text',
};

export default InputBase;
