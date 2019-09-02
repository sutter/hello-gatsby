import React from 'react';
import { css } from '@emotion/core';
import { CtaThemes, CtaSizes, CtaBase, CtaDisabled } from '../../styles/cta';
import { CtaSizesType, CtaThemesType } from '../../appTypes';
import { ButtonBaseInterface } from '../../appInterface';

interface ButtonProps extends ButtonBaseInterface {
  size?: CtaSizesType;
  theme?: CtaThemesType;
  children: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  size = 'M',
  theme = 'primary',
  type = 'button',
  disabled = 'false',
  ...rest
}) => (
  <button
    css={css`
      ${CtaBase};
      ${CtaSizes[size]}
      ${CtaThemes[theme]}
      ${disabled && CtaDisabled}
    `}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
