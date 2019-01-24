import React, { SFC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { font, radius, color, state } from '../../constants/styles';

type ButtonSizes = 'M' | 'S';
type ButtonThemes = 'primary' | 'neutral';

interface ContainerProps {
  className?: string;
  size?: ButtonSizes;
  disabled: boolean;
  theme?: ButtonThemes;
}

const linkState = '&:hover, &:focus, &:active';

export const themes = {
  primary: css`
    color: ${color.light};
    background: ${color.clr1};
    border-color: ${color.clr1};
    ${linkState} {
      color: ${color.light};
      background: ${color.clr1Light};
      border-color: ${color.clr1Light};
    }
  `,
  neutral: css`
    color: ${color.clr1};
    background: 'transparent';
    border-color: ${color.clr1Light};
    ${linkState} {
      color: ${color.clr1};
      background: 'transparent';
      border-color: ${color.clr1};
    }
  `,
};

export const sizes = {
  M: css`
    min-height: 4rem;
    padding: 1.2rem 2rem;
    font-size: inherit;
  `,
  S: css`
    min-height: 3rem;
    padding: 0.8rem 1rem;
    font-size: ${font.size.XS};
  `,
};

const StyledButton = styled.a<ContainerProps>`
  display: inline-flex;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  line-height: 1;
  border-radius: ${radius.S};
  border-style: solid;
  border-width: 1px;
  opacity: ${props => (props.disabled ? state.disabledOpacity : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;
  ${props => themes[props.theme]};
  ${props => sizes[props.size]};
`;

const Button: SFC<ContainerProps> = ({
  children,
  className,
  size,
  theme,
  disabled,
}) => (
  <StyledButton
    className={className}
    size={size || 'M'}
    theme={theme || 'primary'}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

export default Button;
