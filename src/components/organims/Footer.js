import React from 'react';
import styled from '@emotion/styled';
import { rem } from 'polished';
import Link from '../atoms/Link';

const Container = styled.header`
  padding: ${rem(20)};
`;

const Footer = props => (
  <Container {...props}>
    Made by{' '}
    <Link href="http://sutterlity.fr" target="_blank">
      Laurent Sutterlity
    </Link>
  </Container>
);

export default Footer;
