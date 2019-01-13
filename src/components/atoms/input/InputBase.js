import styled from '@emotion/styled';
import * as input from '../../../styles/inputs';
import { state } from '../../../constants/styles';

const InputBase = styled.input`
  ${input.inputBase};
  ${input.inputReadOnly};
  padding: 0 ${input.paddingHorizontal};
  line-height: 1.5;
  opacity: ${props => (props.disabled ? state.disabledOpacity : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

export default InputBase;
