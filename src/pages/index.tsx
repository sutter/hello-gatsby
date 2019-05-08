import * as React from 'react';
import Title from '../components/base/Title';
import Wrapper from '../components/base/Wrapper';
import App from '../components/layout/App';
import { fontSize } from '../constants/styles';

const IndexPage = () => {
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
      </Wrapper>
    </App>
  );
};

export default IndexPage;
