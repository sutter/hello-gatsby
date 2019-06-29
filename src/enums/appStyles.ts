export enum Color {
  Light = '#fff',

  NeutralDark = 'hsla(0, 0%, 13%, 1)',
  Neutral = 'hsla(0, 0%, 13%, 0.75)',
  NeutralLight = 'hsla(0, 0%, 13%, 0.5)',
  NeutralLighter = 'hsla(0, 0%, 13%, 0.25)',

  Clr1 = 'hsla(270, 50%, 40%, 1)',
  Clr1Light = 'hsla(270, 50%, 60%, 1)',

  BorderInput = 'hsla(0, 0%, 13%, 0.125)',
  BorderInputDark = 'hsla(0, 0%, 13%, 0.25)',
}

export enum FontFamily {
  Primary = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  Code = "Consolas, 'Roboto Mono', 'Liberation Mono', Menlo, Courier,",
}

export enum FontWeight {
  Light = 300,
  Regular = 400,
  Medium = 500,
  Bold = 700,
}

export enum FontSize {
  XXS = '1.2rem',
  XS = '1.4rem',
  S = '1.6rem',
  M = '1.8rem',
  L = '2rem',
  XL = '2.2rem',
  XXL = '2.4rem',
  XXXL = '3.2rem',
}

export enum LineHeight {
  XS = 1,
  S = 1.15,
  M = 1.25,
  L = 1.5,
  XL = 1.625,
}
export enum Radius {
  XS = '.2rem',
  S = '.4rem',
}

export enum State {
  DisabledOpacity = 0.25,
}

export enum Breakpoint {
  Smartphone = 480,
  Tablet = 768,
  Desktop = 1024,
  DesktopLarge = 1280,
  MainNav = 666,
}

export const MqUp = (size: Breakpoint) => `@media (min-width: ${size}px)`;
export const MqDown = (size: Breakpoint) =>
  `@media (max-width: ${size + -1}px)`;

export enum Header {
  HeightBase = '10rem',
  HeightSmall = '4rem',
}
