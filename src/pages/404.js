import React from 'react';
import App from '../components/organims/App';
import Title from '../components/atoms/Title';
import { font } from '../constants/styles';

const NotFoundPage = props => {
  return (
    <App>
      <Title
        as="h1"
        css={{
          fontSize: font.size.XXXL,
        }}
      >
        Not Found
      </Title>
    </App>
  );
};
export default NotFoundPage;
