import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import AppHeader from './AppHeader';

export default {
  title: 'Layout|Header',
};

export const base = () => (
  <AppHeader
    navOpen={boolean('navOpen', false)}
    toggleNavMobile={() => null}
    closeNavMobile={() => null}
  />
);
