import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { mqUp } from '../../constants/styles';

type WrapperSizes = 'L' | 'M' | 'S' | 'XS';

interface ContainerProps {
  className?: string;
  size?: WrapperSizes;
  children: ReactNode;
}

export const sizes = {
  L: css`
    max-width: 140rem;
  `,
  M: css`
    max-width: 100rem;
  `,
  S: css`
    max-width: 60rem;
  `,
  XS: css`
    max-width: 48rem;
  `,
};

const Container = styled.div<ContainerProps>`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${props => sizes[props.size]};
  ${mqUp('smartphone')} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Wrapper: SFC<ContainerProps> = ({ children, className, size }) => (
  <Container className={className} size={size || 'M'}>
    {children}
  </Container>
);

export default Wrapper;
