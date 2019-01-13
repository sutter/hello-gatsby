import styled from '@emotion/styled';
import * as input from '../../../styles/inputs';
import { state } from '../../../constants/styles';

const InputTextarea = styled.textarea`
  ${input.inputBase};
  ${input.inputReadOnly};
  padding: 0.7rem ${input.paddingHorizontal};
  min-height: 20rem;
  line-height: 1.5;
  opacity: ${props => (props.disabled ? state.disabledOpacity : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

export default InputTextarea;
