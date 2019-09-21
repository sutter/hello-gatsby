import React from 'react';
import App from './App';
import Wrapper from './Wrapper';

export default {
  title: 'Layout|App',
};

export const base = () => (
  <App>
    <Wrapper>Hello world</Wrapper>
  </App>
);
