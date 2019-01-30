import React from 'react';
import styled from '@emotion/styled';
import { route } from '../../constants/app';
import AppLink from '../base/AppLink';
import Wrapper from '../base/Wrapper';

const Container = styled.header`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const AppHeader = props => (
  <Container {...props}>
    <Wrapper>
      <AppLink to={route.home}>Header</AppLink>
    </Wrapper>
  </Container>
);

export default AppHeader;
