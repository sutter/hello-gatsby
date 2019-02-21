import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  color,
  fontWeight,
  lineHeight,
  radius,
  fontSize,
  fontFamily,
} from '../../constants/styles';

const title = css`
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.L};
`;

const spacing = css`
  margin: 2.4rem 0;
`;

const Content = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  dl,
  blockquote,
  table {
    &:first-of-type {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Typography */
  h1 {
    ${spacing};
    ${title};
    font-size: ${fontSize.XXXL};
  }

  h2 {
    ${spacing};
    ${title};
    font-size: ${fontSize.XXL};
  }

  h3 {
    ${spacing};
    ${title};
    font-size: ${fontSize.XL};
  }

  h4 {
    ${spacing};
    ${title};
    font-size: ${fontSize.L};
  }

  h5 {
    ${spacing};
    ${title};
    font-size: ${fontSize.M};
  }

  h6 {
    ${spacing};
    ${title};
    font-size: ${fontSize.S};
  }

  p {
    ${spacing};
    > code {
      padding: 0.25rem 0.75rem;
      background: hsla(0, 0%, 0%, 0.04);
      border: 1px solid #eee;
      border-radius: ${radius.XS};
    }
  }

  blockquote {
    ${spacing};
    padding-left: 2rem;
    border-left: 4px solid;

    p {
      margin: 0;
    }
  }

  figcaption {
    font-style: italic;
  }

  code {
    font-size: 80%;
    font-family: ${fontFamily.code};
  }

  pre {
    text-align: left;
    font-size: 100%;
  }

  /* List */

  ul,
  ol {
    padding-left: 2rem;
    ${spacing};
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
    ${spacing};
  }

  dt {
    font-weight: ${fontWeight.bold};
    &:not(:first-of-type) {
      margin-top: 1.2rem;
    }
  }

  /* Separator */
  hr {
    height: 0;
    border: 1px solid ${color.neutralLighter};
    ${spacing};
  }

  /* Image */
  img {
    ${spacing};
  }

  /* Table */
  table {
    ${spacing};
    width: 100%;
    max-width: 100%;
    line-height: ${lineHeight.M};
  }

  thead {
    th {
      padding: 1rem;
      vertical-align: bottom;
      border-bottom: 2px solid ${color.neutralLighter};
      font-weight: ${fontWeight.bold};
    }
  }

  tbody {
    td {
      padding: 1rem;
      border-bottom: 1px solid ${color.neutralLighter};
    }
  }
`;

export default Content;
