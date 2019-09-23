import React from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import Tag from './Tag';

interface TagsListProps {
  data: string[];
}

const TagsListEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.4rem;
  > * {
    margin: 0.4rem;
  }
`;

const TagsList: React.FunctionComponent<TagsListProps> = ({
  data,
  ...rest
}) => (
  <TagsListEl {...rest}>
    {data.map(tag => (
      <Tag key={tag} to={`/tags/${kebabCase(tag)}`}>
        {kebabCase(tag)}
      </Tag>
    ))}
  </TagsListEl>
);

export default TagsList;
