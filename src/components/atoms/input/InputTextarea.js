import styled from '@emotion/styled';
import { rem } from 'polished';
import * as input from '../../../styles/inputs';
import { state } from '../../../constants/styles';

const InputTextarea = styled.textarea`
  ${input.inputBase};
  ${input.inputReadOnly};
  padding: ${rem(7)} ${input.paddingHorizontal};
  min-height: ${rem(200)};
  line-height: 1.5;
  opacity: ${props => (props.disabled ? state.disabledOpacity : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

export default InputTextarea;
