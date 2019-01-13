import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { mqUp } from '../../constants/styles';

export const sizes = {
  L: css`
    max-width: 140rem;
  `,
  M: css`
    max-width: 100rem;
  `,
  S: css`
    max-width: 60rem;
  `,
  XS: css`
    max-width: 48rem;
  `,
};

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${props => sizes[props.size]};
  ${mqUp('smartphone')} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default Wrapper;
