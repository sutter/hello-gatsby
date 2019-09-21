import { css } from '@emotion/core';
import { Color, Radius, State } from '../enums/appStyles';

export const paddingHorizontal = '1.2rem';
export const inputHeight = '4rem';

export const inputBase = css`
  display: block;
  width: 100%;
  border: 1px solid ${Color.BorderInput};
  background-color: ${Color.Light};
  box-shadow: none;
  border-radius: ${Radius.S};
  height: ${inputHeight};
  &:hover {
    border-color: ${Color.BorderInputDark};
  }
`;

export const inputReadOnly = css`
  &:read-only {
    background-color: ${Color.BorderInput};
    box-shadow: none;
  }
`;

export const inputDisabled = css`
  &:disabled {
    opacity: ${State.DisabledOpacity};
    pointer-events: none;
  }
`;
