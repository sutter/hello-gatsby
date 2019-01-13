import { rem } from 'polished';

export const color = {
  light: '#ffffff',

  neutralDark: '#212121',
  neutral: '#666',
  neutralLight: '#888',
  neutralLighter: '#ccc',

  clr1: '#663399',
  clr1Light: '#8C65B3',

  border: '#ededed',
};

export const font = {
  family: {
    primary:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    XXS: rem(12),
    XS: rem(14),
    S: rem(16),
    M: rem(18),
    L: rem(20),
    XL: rem(22),
    XXL: rem(24),
    XXXL: rem(32),
  },
  lineHeight: {
    XS: 1,
    S: 1.15,
    M: 1.25,
    L: 1.5,
    XL: 1.625,
  },
};

export const radius = {
  XS: rem(2),
  S: rem(4),
};

export const state = {
  disabledOpacity: 0.25,
};
