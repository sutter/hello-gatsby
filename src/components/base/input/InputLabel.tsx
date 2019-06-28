import * as React from 'react';
import styled from '@emotion/styled';
import { fontSize, color } from '../../../constants/styles';

interface InputLabelProps {
  className?: string;
  for?: string;
  children: React.ReactNode;
}

const Element = styled.label`
  display: block;
  font-size: ${fontSize.M};
  color: ${color.neutralDark};
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const InputLabel: React.FunctionComponent<InputLabelProps> = ({
  children,
  ...rest
}) => <Element {...rest}>{children}</Element>;

export default InputLabel;
