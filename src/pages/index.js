import React from 'react';
import Helmet from 'react-helmet';
import App from '../components/organims/App';
import Link from '../components/atoms/Link';
import Title from '../components/atoms/Title';
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
        <Link to="/404">Not found page</Link>
      </div>
    </App>
  );
};

export default IndexPage;
