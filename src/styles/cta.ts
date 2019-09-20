import { css, SerializedStyles } from '@emotion/core';
import { CtaSizesType, CtaThemesType } from '../appTypes';
import { Radius, State, Color, FontSize } from '../enums/appStyles';

const linkState = '&:hover, &:focus, &:active';

export const CtaThemes: { [key in CtaThemesType]: SerializedStyles } = {
  primary: css`
    color: ${Color.Light};
    background: ${Color.Clr1};
    border-color: ${Color.Clr1};
    ${linkState} {
      color: ${Color.Light};
      background: ${Color.Clr1Light};
      border-color: ${Color.Clr1Light};
    }
  `,
  neutral: css`
    color: ${Color.Clr1};
    background: transparent;
    border-color: ${Color.Clr1Light};
    ${linkState} {
      color: ${Color.Clr1};
      background: transparent;
      border-color: ${Color.Clr1};
    }
  `,
};

export const CtaSizes: { [key in CtaSizesType]: SerializedStyles } = {
  M: css`
    min-height: 4rem;
    padding: 1.2rem 2rem;
    font-size: inherit;
  `,
  S: css`
    min-height: 3rem;
    padding: 0.8rem 1rem;
    font-size: ${FontSize.XS};
  `,
};

export const CtaBase = css`
  display: inline-flex;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  line-height: 1;
  border-radius: ${Radius.S};
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;
`;

export const CtaDisabled = css`
  opacity: ${State.DisabledOpacity};
  pointer-events: none;
`;
