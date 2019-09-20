import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import SEO from './Seo';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import base from '../../styles/base';
import normalize from '../../styles/normalize';
import { Color } from '../../enums/appStyles';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${Color.Light};
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const AppMain = styled.main`
  flex-grow: 1;
`;

interface AppProps {
  title?: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
}

const App: React.FunctionComponent<AppProps> = props => {
  const [navMobileOpen, setNavMobileOpen] = useState(false);
  const toggleNavMobile = () => {
    setNavMobileOpen(!navMobileOpen);
  };
  const closeNavMobile = () => {
    setNavMobileOpen(false);
  };
  const { title, description, children } = props;
  return (
    <Container>
      <SEO title={title} description={description} />
      <Global
        styles={css`
          ${normalize}
          ${base}
        `}
      />
      <AppHeader
        toggleNavMobile={toggleNavMobile}
        closeNavMobile={closeNavMobile}
        navOpen={navMobileOpen}
      />
      <AppMain>{children}</AppMain>
      <AppFooter />
    </Container>
  );
};

export default App;
