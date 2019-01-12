import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { rem } from 'polished';
import * as radius from '../../styles/radius';
import * as color from '../../styles/colors';
import * as state from '../../styles/state';

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
    min-height: ${rem(40)};
    padding: ${rem(12)} ${rem(20)};
    font-size: inherit;
  `,
  S: css`
    min-height: ${rem(30)};
    padding: ${rem(8)} ${rem(10)};
    font-size: ${rem(12)};
  `,
};

const Button = styled.a`
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

Button.defaultProps = {
  theme: 'primary',
  size: 'M',
};

export default Button;
