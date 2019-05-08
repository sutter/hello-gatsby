import * as React from 'react';
import { css } from '@emotion/core';
import Link from './Link';
import { CtaThemes, CtaSizes, CtaBase, CtaDisabled } from '../../styles/cta';
import { CtaSizesType, CtaThemesType } from '../../appTypes';

interface CtaProps {
  size?: CtaSizesType;
  disabled?: boolean;
  theme?: CtaThemesType;
  to: string;
}

const Cta: React.SFC<CtaProps> = ({
  children,
  to,
  size = 'M',
  theme = 'primary',
  disabled = false,
  ...rest
}) => {
  return (
    <Link
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
    </Link>
  );
};

export default Cta;
