import React from 'react';
import styled from '@emotion/styled';
import Link from '../atoms/Link';
import { rem } from 'polished';

const Container = styled.header`
  padding: ${rem(20)};
`;

const AppHeader = props => (
  <Container {...props}>
    <Link to="/">Header</Link>
  </Container>
);

export default AppHeader;
