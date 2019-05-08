import * as React from 'react';
import styled from '@emotion/styled';
import { fontWeight, lineHeight } from '../../constants/styles';
import { TitleNodeType } from '../../appTypes';

interface TitleProps {
  className?: string;
  as?: TitleNodeType;
  children: React.ReactNode;
}

const Element = styled.p<TitleProps>`
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.L};
`;

const Title: React.SFC<TitleProps> = ({ children, as = 'p', ...rest }) => (
  <Element as={as} {...rest}>
    {children}
  </Element>
);

export default Title;
