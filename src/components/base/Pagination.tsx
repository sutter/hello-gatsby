import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from './Link';

interface PaginationProps {
  isFirst: boolean;
  isLast: boolean;
  prevPageUrl: string;
  nextPageUrl: string;
}

const PaginationEl = styled.div`
  &:not(:empty) {
    margin-top: 3.6rem;
    margin-bottom: 3.6rem;
    display: flex;
    justify-content: space-between;
    > * + * {
      margin-left: 2rem;
    }
  }
`;

const Pagination: React.FunctionComponent<PaginationProps> = ({
  isFirst,
  isLast,
  prevPageUrl,
  nextPageUrl,
  ...rest
}) => (
  <PaginationEl {...rest}>
    {!isFirst && (
      <Link to={prevPageUrl} rel="prev">
        ← Previous page
      </Link>
    )}
    {!isLast && (
      <Link
        to={nextPageUrl}
        rel="next"
        css={css`
          margin-left: auto;
        `}
      >
        Next page →
      </Link>
    )}
  </PaginationEl>
);

export default Pagination;
