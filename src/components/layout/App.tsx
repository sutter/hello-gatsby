import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import SEO from '../base/Seo';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import base from '../../styles/base';
import normalize from '../../styles/normalize';
import { color } from '../../constants/styles';

interface ContainerProps {
  title?: string;
  description?: string;
  image?: string;
  children: ReactNode;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${color.light};
  overflow-x: hidden;
  overflow-y: scroll;
`;

const AppMain = styled.main`
  flex-grow: 1;
`;

class App extends React.Component<ContainerProps> {
  state = {};
  render() {
    const { title, description, image, children } = this.props;
    return (
      <Container>
        <SEO title={title} description={description} image={image} />
        <Global
          styles={css`
            ${normalize}
            ${base}
          `}
        />
        <AppHeader />
        <AppMain>{children}</AppMain>
        <AppFooter />
      </Container>
    );
  }
}

export default App;
