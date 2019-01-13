import React from 'react';
import styled from '@emotion/styled';
import Link from '../atoms/Link';

const Container = styled.footer`
  padding: 2rem;
`;

const AppFooter = props => (
  <Container {...props}>
    Made by <Link href="http://sutterlity.fr">Laurent Sutterlity</Link>
  </Container>
);

export default AppFooter;
