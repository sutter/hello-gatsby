import React from 'react';
import styled from '@emotion/styled';
import { FontWeight, LineHeight } from '../../enums/appStyles';
import { TitleNodeType } from '../../appTypes';

interface TitleProps {
  className?: string;
  as?: TitleNodeType;
  children: React.ReactNode;
}

const Element = styled.p<TitleProps>`
  font-weight: ${FontWeight.Bold};
  line-height: ${LineHeight.L};
`;

const Title: React.FunctionComponent<TitleProps> = ({
  children,
  as = 'p',
  ...rest
}) => (
  <Element as={as} {...rest}>
    {children}
  </Element>
);

export default Title;
