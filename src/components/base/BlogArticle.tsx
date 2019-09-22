import React from 'react';
import kebabCase from 'lodash/kebabCase';
import styled from '@emotion/styled';
import Title from './Title';
import Link from './Link';
import Time from './Time';
import Tag from './Tag';

interface BlogArticleProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: [];
}

const BlogArticleEl = styled.article``;

const Header = styled.header`
  margin-bottom: 0.6rem;
`;

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0.6rem -0.6rem -0.6rem;
  > * {
    margin: 0.6rem;
  }
`;

const BlogArticle: React.FunctionComponent<BlogArticleProps> = ({
  slug,
  title,
  date,
  excerpt,
  tags,
  ...rest
}) => (
  <BlogArticleEl {...rest}>
    <Header>
      <Title as="h1">
        <Link to={slug}>{title}</Link>
      </Title>
      <Time>{date}</Time>
    </Header>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    {tags && (
      <TagsList>
        {tags.map(tag => (
          <li key={tag}>
            <Tag to={`/tags/${kebabCase(tag)}`}>{kebabCase(tag)}</Tag>
          </li>
        ))}
      </TagsList>
    )}
  </BlogArticleEl>
);

export default BlogArticle;
