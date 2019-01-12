import React from 'react';
import styled from '@emotion/styled';
import Link from '../atoms/Link';
import { rem } from 'polished';

const Container = styled.footer`
  padding: ${rem(20)};
`;

const AppFooter = props => (
  <Container {...props}>
    Made by <Link href="http://sutterlity.fr">Laurent Sutterlity</Link>
  </Container>
);

export default AppFooter;
