import React from 'react';
import styled from '@emotion/styled';
import { route } from '../../constants/app';
import Link from '../atoms/Link';

const Container = styled.header`
  padding: 2rem;
`;

const AppHeader = props => (
  <Container {...props}>
    <Link to={route.home}>Header</Link>
  </Container>
);

export default AppHeader;
