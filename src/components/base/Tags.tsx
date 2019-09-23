import React from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import Tag from './Tag';

interface TagsProps {
  data: string[];
}

const TagsEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.4rem;
  > * {
    margin: 0.4rem;
  }
`;

const Tags: React.FunctionComponent<TagsProps> = ({ data, ...rest }) => (
  <TagsEl {...rest}>
    {data.map(tag => (
      <Tag key={tag} to={`/tags/${kebabCase(tag)}`}>
        {kebabCase(tag)}
      </Tag>
    ))}
  </TagsEl>
);

export default Tags;
