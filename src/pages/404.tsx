import React, { SFC } from 'react';
import Title from '../components/base/Title';
import Wrapper from '../components/base/Wrapper';
import App from '../components/layout/App';
import { fontSize } from '../constants/styles';

interface NotfoundPageProps {
  props: object;
}

const NotFoundPage: SFC<NotfoundPageProps> = props => {
  return (
    <App>
      <Wrapper>
        <Title
          as="h1"
          css={{
            fontSize: fontSize.XXXL,
          }}
        >
          Not Found
        </Title>
      </Wrapper>
    </App>
  );
};
export default NotFoundPage;
