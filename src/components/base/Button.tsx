import React, { SFC, ReactNode } from 'react';
import { css } from '@emotion/core';
import { CtaThemes, CtaSizes, CtaBase, CtaDisabled } from '../../styles/cta';
import { CtaSizesType, CtaThemesType } from '../../appTypes';

interface ContainerProps {
  className?: string;
  size?: CtaSizesType;
  disabled?: boolean;
  theme?: CtaThemesType;
  children: ReactNode;
  form?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick(event: any): void;
}

const Button: SFC<ContainerProps> = ({
  children,
  onClick,
  size,
  theme,
  disabled,
  className,
  ...rest
}) => (
  <button
    css={css`
      ${CtaBase};
      ${CtaSizes[size]}
      ${CtaThemes[theme]}
      ${disabled && CtaDisabled}
    `}
    onClick={onClick}
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
