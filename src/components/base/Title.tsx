import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { fontWeight, lineHeight } from '../../constants/styles';

interface ElementProps {
  className?: string;
  as: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
}

const Element = styled.p<ElementProps>`
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.L};
`;

const Title: SFC<ElementProps> = ({ children, className, as }) => (
  <Element className={className} as={as || 'p'}>
    {children}
  </Element>
);

export default Title;
