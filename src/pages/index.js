import React from 'react';
import Link from '../components/atoms/Link';
import Title from '../components/atoms/Title';
import Wrapper from '../components/atoms/Wrapper';
import App from '../components/organims/App';
import { font } from '../constants/styles';

const IndexPage = props => {
  return (
    <App>
      <Wrapper size="M">
        <Title
          as="h1"
          css={{
            fontSize: font.size.XXXL,
          }}
        >
          Hello World
        </Title>
        <div>
          <Link to="/404">Not found page</Link>
        </div>
      </Wrapper>
    </App>
  );
};

export default IndexPage;
