import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { rem } from 'polished';
import Header from '../organims/Header';
import Footer from '../organims/Footer';
import base from '../../styles/base';
import normalize from '../../styles/normalize';
import * as colors from '../../styles/colors';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${colors.light};
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Main = styled.main`
  padding: ${rem(20)};
  flex-grow: 1;
`;

class App extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Helmet
          title="Hello Gatsby"
          meta={[
            { name: 'description', content: 'Simple starter for Gatsby.js' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Global
          styles={css`
            ${normalize}
            ${base}
          `}
        />
        <Header />
        <Main>{this.props.children}</Main>
        <Footer />
      </Container>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
export default App;
