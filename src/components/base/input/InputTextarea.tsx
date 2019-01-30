import React, { SFC } from 'react';
import styled from '@emotion/styled';
import * as input from '../../../styles/inputs';
import { InputBasic, InputEditable } from '../../../constants/interface';

interface ElementProps {
  cols?: number;
  rows?: number;
  autocomplete?: 'off' | 'on';
  spellcheck?: boolean;
}

const Element = styled.textarea<ElementProps>`
  ${input.inputBase};
  padding: 0.7rem ${input.paddingHorizontal};
  min-height: 20rem;
  line-height: 1.5;
  ${input.inputDisabled};
  ${input.inputReadOnly};
`;

const InputTextarea: SFC<ElementProps & InputBasic & InputEditable> = props => (
  <Element {...props} />
);

export default InputTextarea;
