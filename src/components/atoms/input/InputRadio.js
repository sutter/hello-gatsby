import React from 'react';
import styled from '@emotion/styled';
import { color, state } from '../../../constants/styles';

const bulletSize = 1.6;

const Label = styled.label`
  position: relative;
  padding-left: ${bulletSize + 0.75}rem;
  opacity: ${props => (props.disabled ? state.disabledOpacity : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0.4rem;
    left: 0;
    width: ${bulletSize}rem;
    height: ${bulletSize}rem;
    box-shadow: inset 0 0 0
      ${props =>
        props.checked ? `.6rem ${color.clr1}` : `1px ${color.borderInput}`};
    border-radius: 50%;
    transition: box-shadow 0.3s ease-in-out;
  }
  &:hover {
    &::before {
      box-shadow: inset 0 0 0
        ${props =>
          props.checked
            ? `.6rem ${color.clr1}`
            : `1px ${color.borderInputDark}`};
    }
  }
`;

const InputRadio = ({ children, checked, disabled, ...rest }) => {
  return (
    <Label checked={checked} disabled={disabled}>
      <input type="radio" checked={checked} disabled={disabled} {...rest} />
      {children}
    </Label>
  );
};

export default InputRadio;
