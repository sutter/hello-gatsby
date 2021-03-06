import React from 'react';
import styled from '@emotion/styled';
import { FontSize, Color, FontWeight } from '../../../enums/appStyles';

interface InputLabelProps {
  className?: string;
  for?: string;
  children: React.ReactNode;
}

const Element = styled.label`
  display: block;
  font-size: ${FontSize.S};
  font-weight: ${FontWeight.Medium};
  color: ${Color.NeutralDark};
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
