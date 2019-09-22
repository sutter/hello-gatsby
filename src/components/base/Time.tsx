import React from 'react';
import styled from '@emotion/styled';
import { FontSize, Color } from '../../enums/appStyles';

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Element = styled.time`
  font-size: ${FontSize.XS};
  color: ${Color.Neutral};
`;

const Title: React.FunctionComponent<TitleProps> = ({ children, ...rest }) => (
  <Element {...rest}>{children}</Element>
);

export default Title;
