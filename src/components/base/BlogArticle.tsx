import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Title from './Title';
import Link from './Link';
import Time from './Time';
import TagsList from './TagsList';

interface BlogArticleProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: [];
}

const BlogArticleEl = styled.article`
  &:not(:last-child) {
    margin-bottom: 3.6rem;
  }
`;

const Header = styled.header`
  margin-bottom: 0.6rem;
`;

const BlogArticle: React.FunctionComponent<BlogArticleProps> = ({
  slug,
  title,
  date,
  excerpt,
  tags,
  ...rest
}) => {
  return (
    <BlogArticleEl {...rest}>
      <Header>
        <Title as="h1">
          <Link to={slug}>{title}</Link>
        </Title>
        <Time date={date} />
      </Header>
      <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      {tags && (
        <div
          css={css`
            margin-top: 1.2rem;
          `}
        >
          <TagsList data={tags} />
        </div>
      )}
    </BlogArticleEl>
  );
};

export default BlogArticle;
