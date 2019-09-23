import React from 'react';
import styled from '@emotion/styled';
import Link from './Link';
import { Color, FontSize, LineHeight } from '../../enums/appStyles';

interface TagProps {
  children: React.ReactNode;
  to: string;
}

const TagEl = styled(Link)`
  display: inline-block;
  vertical-align: bottom;
  padding: 0.3rem 1.2rem;
  font-size: ${FontSize.XXS};
  line-height: ${LineHeight.S};
  border: 1px solid ${Color.Clr1Lighter};
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 3rem;
  max-width: 20rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Tag: React.FunctionComponent<TagProps> = ({ children, ...rest }) => (
  <TagEl rel="tag" {...rest}>
    {children}
  </TagEl>
);

export default Tag;
