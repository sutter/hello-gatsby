import * as React from 'react';
import Title from '../components/base/Title';
import Wrapper from '../components/base/Wrapper';
import App from '../components/layout/App';
import { FontSize } from '../enums/appStyles';

const IndexPage = () => {
  return (
    <App>
      <Wrapper>
        <Title
          as="h1"
          css={{
            fontSize: FontSize.XXXL,
          }}
        >
          Hello World
        </Title>
      </Wrapper>
    </App>
  );
};

export default IndexPage;
