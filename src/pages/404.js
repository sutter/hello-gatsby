import React from 'react';
import App from '../components/organims/App';
import Title from '../components/atoms/Title';
import Wrapper from '../components/atoms/Wrapper';
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
