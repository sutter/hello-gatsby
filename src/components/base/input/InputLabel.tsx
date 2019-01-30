import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { fontSize, color } from '../../../constants/styles';

interface ElementProps {
  className?: string;
  for?: string;
  children: ReactNode;
}

const Element = styled.label<ElementProps>`
  display: block;
  font-size: ${fontSize.M};
  color: ${color.neutralDark};
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const InputLabel: SFC<ElementProps> = ({ children, ...rest }) => (
  <Element {...rest}>{children}</Element>
);

export default InputLabel;
