import React, { SFC } from 'react';
import styled from '@emotion/styled';
import * as input from '../../../styles/inputs';
import {
  InputBasicInterface,
  InputEditableInterface,
} from '../../../appInterface';
import { InputBaseType } from '../../../appTypes';

interface InputBaseInterface {
  type: InputBaseType;
  size?: number;
}

const Element = styled.input`
  ${input.inputBase};
  padding: 0 ${input.paddingHorizontal};
  line-height: 1.5;
  ${input.inputDisabled};
  ${input.inputReadOnly};
`;

const InputBase: SFC<
  InputBaseInterface & InputBasicInterface & InputEditableInterface
> = props => <Element {...props} />;

InputBase.defaultProps = {
  type: 'text',
};

export default InputBase;
