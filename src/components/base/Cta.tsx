import React, { SFC, ReactNode } from 'react';
import { css } from '@emotion/core';
import AppLink from './AppLink';
import ExternalLink from './ExternalLink';
import { CtaThemes, CtaSizes, CtaBase, CtaDisabled } from '../../styles/cta';
import { CtaSizesType, CtaThemesType } from '../../appTypes';

interface CtaProps {
  size?: CtaSizesType;
  disabled?: boolean;
  theme?: CtaThemesType;
  to: string;
}

const Cta: SFC<CtaProps> = ({
  children,
  to,
  size,
  theme,
  disabled,
  ...rest
}) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <AppLink
        css={css`
          ${CtaBase};
          ${CtaSizes[size]}
          ${CtaThemes[theme]}
          ${disabled && CtaDisabled}
        `}
        to={to}
        {...rest}
      >
        {children}
      </AppLink>
    );
  }
  return (
    <ExternalLink
      css={css`
        ${CtaBase}
        ${CtaSizes[size]}
        ${CtaThemes[theme]}
        ${disabled && CtaDisabled}
      `}
      href={to}
      {...rest}
    >
      {children}
    </ExternalLink>
  );
};

Cta.defaultProps = {
  size: 'M',
  theme: 'primary',
  disabled: false,
};

export default Cta;
