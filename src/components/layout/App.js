import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rem } from 'polished';
import Header from '../organims/Header';
import Footer from '../organims/Footer';
import * as colors from '../../styles/colors';
import '../../styles/global';

class App extends React.Component {
  state = {};
  render() {
    return (
      <div
        className={css({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          background: colors.light,
          overflowX: 'hidden',
          overflowY: 'scroll',
        })}
      >
        <Helmet
          title="Hello Gatsby"
          meta={[
            {
              name: 'description',
              content: 'Simple starter for Gatsby.js',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <main
          className={css({
            padding: rem(20),
            flexGrow: 1,
          })}
        >
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
export default App;
