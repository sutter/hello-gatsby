import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { color, state, radius } from '../../../constants/styles';
import IconCheck from '../icons/IconCheck';
import { InputBasicInterface } from '../../../appInterface';

interface InputCheckboxInterface {
  children: ReactNode;
  checked?: boolean;
  onChange?(event: any): void;
}

const bulletSize = 1.6;
const bulletTop = 0.4;

const Icon = styled(IconCheck)`
  position: absolute;
  left: 0;
  top: ${bulletTop}rem;
`;

const Label = styled.label<InputCheckboxInterface & InputBasicInterface>`
  position: relative;
  padding-left: ${bulletSize + 0.75}rem;
  opacity: ${props => (props.disabled ? state.disabledOpacity : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: ${bulletTop}rem;
    left: 0;
    width: ${bulletSize}rem;
    height: ${bulletSize}rem;
    box-shadow: inset 0 0 0
      ${props =>
        props.checked ? `.1rem ${color.clr1}` : `1px ${color.borderInput}`};
    background: ${props => (props.checked ? color.clr1 : 'transparent')};
    border-radius: ${radius.XS};
    transition: all 0.3s ease-in-out;
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

const InputCheckbox: SFC<InputCheckboxInterface & InputBasicInterface> = ({
  className,
  children,
  checked,
  disabled,
  ...rest
}) => {
  return (
    <Label checked={checked} disabled={disabled} className={className}>
      <Icon
        stroke={checked ? color.light : 'transparent'}
        size={bulletSize * 10}
        strokeWidth={2}
      />
      <input type="checkbox" checked={checked} disabled={disabled} {...rest} />
      {children}
    </Label>
  );
};

export default InputCheckbox;
