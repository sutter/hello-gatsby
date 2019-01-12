import React from 'react';
import Link from '../components/atoms/Link';
import Title from '../components/atoms/Title';
import App from '../components/organims/App';
import * as font from '../styles/fonts';

const IndexPage = props => {
  return (
    <App>
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
