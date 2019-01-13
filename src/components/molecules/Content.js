import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { color, font } from '../../constants/styles';
import { rem } from 'polished';

const title = css`
  font-weight: ${font.weight.bold};
  line-height: ${font.lineHeight.L};
`;

const spacing = css`
  margin: ${rem(24)} 0;
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
    &:first-child {
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
    font-size: ${font.size.XXXL};
  }

  h2 {
    ${spacing};
    ${title};
    font-size: ${font.size.XXL};
  }

  h3 {
    ${spacing};
    ${title};
    font-size: ${font.size.XL};
  }

  h4 {
    ${spacing};
    ${title};
    font-size: ${font.size.L};
  }

  h5 {
    ${spacing};
    ${title};
    font-size: ${font.size.M};
  }

  h6 {
    ${spacing};
    ${title};
    font-size: ${font.size.S};
  }

  p {
    ${spacing};
    > code {
      padding: 0.25rem 0.75rem;
      background: hsla(0, 0%, 0%, 0.04);
      border: 1px solid #eee;
      border-radius: ${rem(3)};
    }
  }

  blockquote {
    ${spacing};
    padding-left: ${rem(20)};
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
    font-family: Consolas, 'Roboto Mono', 'Liberation Mono', Menlo, Courier,
      monospace;
  }

  pre {
    text-align: left;
    font-size: 100%;
  }

  /* List */

  ul,
  ol {
    padding-left: ${rem(20)};
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
    font-weight: ${font.weight.bold};
    &:not(:first-child) {
      margin-top: ${rem(12)};
    }
  }

  /* Separator */
  hr {
    height: 0;
    border: 1px solid ${color.border};
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
    line-height: ${font.lineHeight.M};
  }

  thead {
    th {
      padding: ${rem(10)};
      vertical-align: bottom;
      border-bottom: 2px solid ${color.border};
      font-weight: ${font.weight.bold};
    }
  }

  tbody {
    td {
      padding: ${rem(10)};
      border-bottom: 1px solid ${color.border};
    }
  }
`;

export default Content;
