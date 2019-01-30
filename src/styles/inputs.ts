import { css } from '@emotion/core';
import { color, radius, state } from '../constants/styles';

export const paddingHorizontal = '2rem';
export const inputHeight = '4rem';

export const inputBase = css`
  display: block;
  width: 100%;
  border: 1px solid ${color.borderInput};
  background-color: ${color.light};
  box-shadow: none;
  border-radius: ${radius.S};
  min-height: ${inputHeight};
  &:hover {
    border-color: ${color.borderInputDark};
  }
`;

export const inputReadOnly = css`
  &:read-only {
    background-color: ${color.borderInput};
    box-shadow: none;
  }
`;

export const inputDisabled = css`
  &:disabled {
    opacity: ${state.disabledOpacity};
    pointer-events: none;
  }
`;
