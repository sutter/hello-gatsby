import React from 'react';
import styled from '@emotion/styled';
import { route } from '../../constants/app';
import Link from '../atoms/Link';
import Wrapper from '../atoms/Wrapper';

const Container = styled.header`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const AppHeader = props => (
  <Container {...props}>
    <Wrapper size="M">
      <Link to={route.home}>Header</Link>
    </Wrapper>
  </Container>
);

export default AppHeader;
