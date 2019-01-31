import React, { SFC } from 'react';
import styled from '@emotion/styled';
import * as input from '../../../styles/inputs';
import {
  InputBasicInterface,
  InputEditableInterface,
} from '../../../appInterface';

interface ComponentInterface {
  cols?: number;
  rows?: number;
  autocomplete?: 'off' | 'on';
  spellcheck?: boolean;
}

const Element = styled.textarea`
  ${input.inputBase};
  padding: 0.7rem ${input.paddingHorizontal};
  min-height: 20rem;
  line-height: 1.5;
  ${input.inputDisabled};
  ${input.inputReadOnly};
`;

const InputTextarea: SFC<
  ComponentInterface & InputBasicInterface & InputEditableInterface
> = props => <Element {...props} />;

export default InputTextarea;
