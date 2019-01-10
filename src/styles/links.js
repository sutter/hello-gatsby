import { css } from '@emotion/core';
import * as color from './colors';

export const styleBase = props => css`
  color: ${color.clr1};
  transition: color 0.3s ease-in-out;
  opacity: ${props.disabled ? 0.5 : 1};
  pointer-events: ${props.disabled ? 'none' : 'auto'};
  &:active,
  &:hover,
  &:focus {
    color: ${color.clr1Light};
  }
`;
