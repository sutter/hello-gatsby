import * as React from 'react';
import styled from '@emotion/styled';
import { Color, State } from '../../../enums/appStyles';
import { InputBasicInterface } from '../../../appInterface';
interface InputRadioProps extends InputBasicInterface {
  children: React.ReactNode;
  checked?: boolean;
  onChange?(event: any): void;
}

const bulletSize = 1.6;

const Label = styled.label<InputRadioProps>`
  position: relative;
  padding-left: ${bulletSize + 0.75}rem;
  opacity: ${props => (props.disabled ? State.DisabledOpacity : 1)};
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
        props.checked ? `.6rem ${Color.Clr1}` : `1px ${Color.BorderInput}`};
    border-radius: 50%;
    transition: box-shadow 0.3s ease-in-out;
  }
  &:hover {
    &::before {
      box-shadow: inset 0 0 0
        ${props =>
          props.checked
            ? `.6rem ${Color.Clr1}`
            : `1px ${Color.BorderInputDark}`};
    }
  }
`;

const InputRadio: React.FunctionComponent<InputRadioProps> = ({
  className,
  children,
  checked,
  disabled,
  ...rest
}) => {
  return (
    <Label checked={checked} disabled={disabled} className={className}>
      <input
        type="radio"
        checked={checked || false}
        disabled={disabled || false}
        {...rest}
      />
      {children}
    </Label>
  );
};

export default InputRadio;
