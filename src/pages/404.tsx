import * as React from 'react';
import Title from '../components/base/Title';
import Wrapper from '../components/base/Wrapper';
import App from '../components/layout/App';
import { FontSize } from '../enums/appStyles';

const NotFoundPage = () => {
  return (
    <App>
      <Wrapper>
        <Title
          as="h1"
          css={{
            fontSize: FontSize.XXXL,
          }}
        >
          Not Found
        </Title>
      </Wrapper>
    </App>
  );
};
export default NotFoundPage;
