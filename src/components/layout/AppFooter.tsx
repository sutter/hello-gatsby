import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Link from '../base/Link';
import Wrapper from './Wrapper';

interface FooterProps {
  props?: object;
}

const Container = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const AppFooter: React.FunctionComponent<FooterProps> = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            twitterUser
          }
        }
      }
    `,
  );
  return (
    <Container {...props}>
      <Wrapper>
        <p>
          Made by{' '}
          <Link
            to={`https://twitter.com/${site.siteMetadata.twitterUser.slice(1)}`}
          >
            {site.siteMetadata.author}
          </Link>
        </p>
      </Wrapper>
    </Container>
  );
};

export default AppFooter;
