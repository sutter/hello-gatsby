import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  Color,
  FontWeight,
  LineHeight,
  Radius,
  FontSize,
  FontFamily,
  TransitionTiming,
} from '../../enums/appStyles';

const title = css`
  font-weight: ${FontWeight.Bold};
  line-height: ${LineHeight.L};
`;

const spacing = 1.2;

const Content = styled.div`
  > * {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  /* Typography */
  h1 {
    ${title};
    margin: ${spacing * 2}rem 0;
    font-size: ${FontSize.XXL};
  }
  h2 {
    ${title};
    margin: ${spacing * 2}rem 0;
    font-size: ${FontSize.XL};
  }
  h3 {
    ${title};
    margin: ${spacing * 2}rem 0;
    font-size: ${FontSize.L};
  }
  h4 {
    ${title};
    margin: ${spacing * 2}rem 0;
    font-size: ${FontSize.M};
  }
  h5 {
    ${title};
    margin: ${spacing * 2}rem 0;
    font-size: ${FontSize.S};
  }
  h6 {
    ${title};
    margin: ${spacing * 2}rem 0;
    font-size: ${FontSize.S};
  }
  p {
    margin: ${spacing}rem 0;
    > code {
      padding: 0.25rem 0.75rem;
      background: hsla(0, 0%, 0%, 0.04);
      border: 1px solid ${Color.NeutralLighter};
      border-radius: ${Radius.XS};
    }
    &.lead {
      font-weight: ${FontWeight.Bold};
    }
  }
  blockquote {
    margin: ${spacing}rem 0;
    font-size: ${FontSize.M};
    font-weight: ${FontWeight.Medium};
    p {
      margin: 0;
    }
    footer {
      color: ${Color.NeutralLight};
      font-size: ${FontSize.S};
      &::before {
        content: '— ';
      }
    }
  }
  figcaption {
    font-style: italic;
  }
  code {
    font-size: 80%;
    font-family: ${FontFamily.Code};
  }
  pre {
    text-align: left;
    font-size: 100%;
  }
  small {
    font-size: 80%;
  }
  /* List */
  ul,
  ol {
    margin: ${spacing}rem 0;
    padding-left: 1.9rem;
    ol,
    ul {
      list-style: circle;
      margin: 0;
    }
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  dl {
    margin: ${spacing}rem 0;
  }
  dt {
    font-weight: ${FontWeight.Bold};
    &:not(:first-of-type) {
      margin-top: ${spacing}rem;
    }
  }
  /* Separator */
  hr {
    height: 0;
    border-top: 1px solid ${Color.NeutralLighter};
    margin: ${spacing * 2}rem 0;
  }
  /* Link */
  a {
    color: ${Color.Clr1};
    text-decoration: underline;
    transition: color 0.3s ${TransitionTiming.base};
    &:hover,
    &:focus {
      color: ${Color.Clr1Light};
    }
  }
  /* Image */
  figure {
    padding: 0;
    margin: ${spacing * 2}rem auto;
    img {
      margin: 0;
    }
  }
  figcaption {
    margin-top: 0.8rem;
    font-size: 90%;
  }
  img {
    display: block;
    margin: ${spacing * 2}rem auto;
    border-radius: ${Radius.XS};
  }
  /* Table */
  caption {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    color: ${Color.NeutralLight};
    text-align: left;
    caption-side: bottom;
  }
  table {
    margin: ${spacing}rem 0;
    width: 100%;
    max-width: 100%;
    line-height: ${LineHeight.M};
  }
  thead {
    th {
      padding: 1.2rem;
      vertical-align: bottom;
      border-top: 1px solid ${Color.NeutralLighter};
      border-bottom: 2px solid ${Color.NeutralLighter};
      font-weight: ${FontWeight.Bold};
    }
  }
  tbody {
    td {
      padding: 1.2rem;
      border-bottom: 1px solid ${Color.NeutralLighter};
    }
  }
`;

export default Content;
