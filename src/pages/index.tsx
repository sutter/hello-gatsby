import React from 'react';
import AppLink from '../components/base/AppLink';
import Title from '../components/base/Title';
import Wrapper from '../components/base/Wrapper';
import App from '../components/layout/App';
import { fontSize } from '../constants/styles';

const IndexPage = props => {
  return (
    <App>
      <Wrapper>
        <Title
          as="h1"
          css={{
            fontSize: fontSize.XXXL,
          }}
        >
          Hello World
        </Title>
        <div>
          <AppLink to="/404">Not found page</AppLink>
        </div>
      </Wrapper>
    </App>
  );
};

export default IndexPage;
