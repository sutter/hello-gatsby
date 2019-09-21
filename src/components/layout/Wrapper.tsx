import React from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
import { MqUp, Breakpoint } from '../../enums/appStyles';
import { WrapperSizesType } from '../../appTypes';

interface WrapperProps {
  className?: string;
  size?: WrapperSizesType;
  children: React.ReactNode;
}

export const sizes: { [key in WrapperSizesType]: SerializedStyles } = {
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

const Container = styled.div<WrapperProps>`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${MqUp(Breakpoint.Smartphone)} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Wrapper: React.FunctionComponent<WrapperProps> = ({
  children,
  className,
  size = 'M',
}) => (
  <Container className={className} css={sizes[size]}>
    {children}
  </Container>
);

export default Wrapper;
