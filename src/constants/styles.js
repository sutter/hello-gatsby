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
  weight: { light: 300, regular: 400, medium: 500, bold: 700 },
  size: {
    XXS: '1.2rem',
    XS: '1.4rem',
    S: '1.6rem',
    M: '1.8rem',
    L: '2rem',
    XL: '2.2rem',
    XXL: '2.4rem',
    XXXL: '3.2rem',
  },
  lineHeight: { XS: 1, S: 1.15, M: 1.25, L: 1.5, XL: 1.625 },
};

export const radius = {
  XS: '.2rem',
  S: '.4rem',
};

export const state = {
  disabledOpacity: 0.25,
};

export const breakpoint = {
  smartphone: 480,
  tablet: 768,
  desktop: 1024,
  desktopLarge: 1280,
};

export const mqUp = size => `@media (min-width: ${breakpoint[size]}px)`;
export const mqDown = size => `@media (max-width: ${breakpoint[size] - 1}px)`;
