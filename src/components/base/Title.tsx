import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { fontWeight, lineHeight } from '../../constants/styles';
import { TitleNodeType } from '../../appTypes';

interface ElementProps {
  className?: string;
  as: TitleNodeType;
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
