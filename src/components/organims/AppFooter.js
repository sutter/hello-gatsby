import React from 'react';
import styled from '@emotion/styled';
import Link from '../atoms/Link';
import Wrapper from '../atoms/Wrapper';

const Container = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const AppFooter = props => (
  <Container {...props}>
    <Wrapper size="M">
      <p>
        Made by <Link href="http://sutterlity.fr">Laurent Sutterlity</Link>
      </p>
    </Wrapper>
  </Container>
);

export default AppFooter;
