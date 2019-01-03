import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { rem } from 'polished';

const Container = styled.header`
  padding: ${rem(20)};
`;

const Header = props => (
  <Container {...props}>
    <Link to="/">Header</Link>
  </Container>
);

export default Header;
