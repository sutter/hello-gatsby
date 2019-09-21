import React from 'react';
import styled from '@emotion/styled';
import {
  Color,
  State,
  Radius,
  TransitionTiming,
} from '../../../enums/appStyles';
import { InputBasicInterface, IconInterface } from '../../../appInterface';

interface InputCheckboxProps extends InputBasicInterface {
  children: React.ReactNode;
  checked?: boolean;
  onChange?(event: any): void;
}

const bulletSize = 1.6;
const bulletTop = 0.4;

const IconCheck: React.FunctionComponent<IconInterface> = ({
  size = 16,
  stroke = 'currentColor',
  strokeWidth = 2,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...rest}>
    <title>{'check'}</title>
    <path
      stroke={stroke}
      d="M12.113 5.153L7 10.944l-2.308-2.38"
      strokeWidth={strokeWidth}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Icon = styled(IconCheck)`
  position: absolute;
  left: 0;
  top: ${bulletTop}rem;
`;

const Label = styled.label<InputCheckboxProps>`
  position: relative;
  padding-left: ${bulletSize + 0.75}rem;
  opacity: ${props => (props.disabled ? State.DisabledOpacity : 1)};
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
        props.checked ? `.1rem ${Color.Clr1}` : `1px ${Color.BorderInput}`};
    background: ${props => (props.checked ? Color.Clr1 : 'transparent')};
    border-radius: ${Radius.XS};
    transition: all 0.3s ${TransitionTiming.base};
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

const InputCheckbox: React.FunctionComponent<InputCheckboxProps> = ({
  className,
  children,
  checked,
  disabled,
  ...rest
}) => {
  return (
    <Label checked={checked} disabled={disabled} className={className}>
      <Icon
        stroke={checked ? Color.Light : 'transparent'}
        size={bulletSize * 10}
        strokeWidth={2}
      />
      <input type="checkbox" checked={checked} disabled={disabled} {...rest} />
      {children}
    </Label>
  );
};

export default InputCheckbox;
