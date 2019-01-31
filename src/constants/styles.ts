export enum color {
  transparent = 'transparent',

  light = '#fff',

  neutralDark = 'hsla(0, 0%, 13%, 1)',
  neutral = 'hsla(0, 0%, 13%, 0.75)',
  neutralLight = 'hsla(0, 0%, 13%, 0.5)',
  neutralLighter = 'hsla(0, 0%, 13%, 0.25)',

  clr1 = 'hsla(270, 50%, 40%, 1)',
  clr1Light = 'hsla(270, 50%, 60%, 1)',

  borderInput = 'hsla(0, 0%, 13%, 0.125)',
  borderInputDark = 'hsla(0, 0%, 13%, 0.25)',
}

export enum fontFamily {
  primary = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  code = "Consolas, 'Roboto Mono', 'Liberation Mono', Menlo, Courier,",
}

export enum fontWeight {
  light = 300,
  regular = 400,
  medium = 500,
  bold = 700,
}

export enum fontSize {
  XXS = '1.2rem',
  XS = '1.4rem',
  S = '1.6rem',
  M = '1.8rem',
  L = '2rem',
  XL = '2.2rem',
  XXL = '2.4rem',
  XXXL = '3.2rem',
}

export enum lineHeight {
  XS = 1,
  S = 1.15,
  M = 1.25,
  L = 1.5,
  XL = 1.625,
}
export enum radius {
  XS = '.2rem',
  S = '.4rem',
}

export enum state {
  disabledOpacity = 0.25,
}

export enum breakpoint {
  smartphone = 480,
  tablet = 768,
  desktop = 1024,
  desktopLarge = 1280,
}

export const mqUp = size => `@media (min-width: ${breakpoint[size]}px)`;
export const mqDown = size => `@media (max-width: ${breakpoint[size] + -1}px)`;
