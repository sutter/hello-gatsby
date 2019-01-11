import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Title from '../components/atoms/Title';
import Link from '../components/atoms/Link';
import * as font from '../styles/fonts';

const IndexPage = props => {
  return (
    <App>
      <Helmet title="Hello Gatsby">
        <html lang="fr" />
      </Helmet>
      <Title
        as="h1"
        css={{
          fontSize: font.XXXL,
        }}
      >
        Hello World
      </Title>
      <div>
        <Link to="/404" as={GatsbyLink}>
          Not found page
        </Link>
      </div>
    </App>
  );
};

export default IndexPage;
