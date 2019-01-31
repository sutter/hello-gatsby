import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { fontWeight, lineHeight } from '../../constants/styles';
import { TitleNodeType } from '../../appTypes';

interface TitleProps {
  className?: string;
  as?: TitleNodeType;
  children: ReactNode;
}

const Element = styled.p<TitleProps>`
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.L};
`;

const Title: SFC<TitleProps> = ({ children, as, ...rest }) => (
  <Element as={as} {...rest}>
    {children}
  </Element>
);

Title.defaultProps = {
  as: 'p',
};

export default Title;
