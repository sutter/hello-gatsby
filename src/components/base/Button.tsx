import React, { SFC, ReactNode } from 'react';
import { css } from '@emotion/core';
import { CtaThemes, CtaSizes, CtaBase, CtaDisabled } from '../../styles/cta';
import { CtaSizesType, CtaThemesType } from '../../appTypes';
import { ButtonBaseInterface } from '../../appInterface';

interface ButtonInterface {
  size?: CtaSizesType;
  theme?: CtaThemesType;
  children: ReactNode;
}

const Button: SFC<ButtonInterface & ButtonBaseInterface> = ({
  children,
  size,
  theme,
  disabled,
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

Button.defaultProps = {
  size: 'M',
  theme: 'primary',
  disabled: false,
  type: 'button',
};

export default Button;
