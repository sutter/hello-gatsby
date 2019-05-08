import * as React from 'react';
import styled from '@emotion/styled';
import Link from '../base/Link';
import Wrapper from '../base/Wrapper';

interface FooterProps {
  props?: object;
}

const Container = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const AppFooter: React.SFC<FooterProps> = props => (
  <Container {...props}>
    <Wrapper>
      <p>
        Made by <Link to="http://sutterlity.fr">Laurent Sutterlity</Link>
      </p>
    </Wrapper>
  </Container>
);

export default AppFooter;
