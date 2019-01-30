import React from 'react';
import styled from '@emotion/styled';
import ExternalLink from '../base/ExternalLink';
import Wrapper from '../base/Wrapper';

const Container = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const AppFooter = props => (
  <Container {...props}>
    <Wrapper>
      <p>
        Made by{' '}
        <ExternalLink href="http://sutterlity.fr">
          Laurent Sutterlity
        </ExternalLink>
      </p>
    </Wrapper>
  </Container>
);

export default AppFooter;
