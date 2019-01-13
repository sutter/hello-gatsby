import React from 'react';
import styled from '@emotion/styled';
import Link from '../atoms/Link';

const Container = styled.header`
  padding: 2rem;
`;

const AppHeader = props => (
  <Container {...props}>
    <Link to="/">Header</Link>
  </Container>
);

export default AppHeader;
