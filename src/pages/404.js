import React from 'react';
import Title from '../components/base/Title';
import Wrapper from '../components/base/Wrapper';
import App from '../components/layout/App';
import { font } from '../constants/styles';

const NotFoundPage = props => {
  return (
    <App>
      <Wrapper size="M">
        <Title
          as="h1"
          css={{
            fontSize: font.size.XXXL,
          }}
        >
          Not Found
        </Title>
      </Wrapper>
    </App>
  );
};
export default NotFoundPage;
