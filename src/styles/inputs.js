import { css } from '@emotion/core';
import { color, radius } from '../constants/styles';

export const paddingHorizontal = '2rem';

export const inputBase = css`
  display: block;
  width: 100%;
  border: 1px solid ${color.border};
  background-color: ${color.light};
  box-shadow: none;
  border-radius: ${radius.S};
  min-height: 4rem;
`;

export const inputReadOnly = css`
  &:read-only {
    background-color: ${color.border};
    box-shadow: none;
  }
`;
