import React from 'react';
import App from '../components/organims/App';
import Title from '../components/atoms/Title';
import * as font from '../styles/fonts';

const NotFoundPage = props => {
  return (
    <App>
      <Title
        as="h1"
        css={{
          fontSize: font.XXXL,
        }}
      >
        Not Found
      </Title>
    </App>
  );
};
export default NotFoundPage;
