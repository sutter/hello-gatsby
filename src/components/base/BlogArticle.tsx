import React from 'react';
import styled from '@emotion/styled';
import Link from './Link';
import Title from './Title';
import Time from './Time';

interface BlogArticleProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const BlogArticleEl = styled.article``;

const BlogArticle: React.FunctionComponent<BlogArticleProps> = ({
  slug,
  title,
  date,
  excerpt,
  ...rest
}) => (
  <BlogArticleEl {...rest}>
    <header>
      <Title as="h1">
        <Link to={slug}>{title}</Link>
      </Title>
      <Time>{date}</Time>
    </header>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </BlogArticleEl>
);

export default BlogArticle;
