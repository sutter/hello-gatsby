import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Wrapper from '../components/layout/Wrapper';
import App from '../components/layout/App';
import Content from '../components/base/Content';
import Title from '../components/base/Title';
import Time from '../components/base/Time';
import Link from '../components/base/Link';
import TagsList from '../components/base/TagsList';

interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      id: string;
      excerpt: string;
      html: string;
      frontmatter: {
        title: string;
        description: string;
        date: string;
        tags: string[];
      };
    };
  };
  pageContext: {
    previous: any;
    next: any;
  };
}

const Article = styled.article``;

const ArticleHeader = styled.header`
  margin-bottom: 3.6rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 3.6rem;
`;

const BlogPostTemplate: React.FunctionComponent<
  BlogPostTemplateProps
> = props => {
  const post = props.data.markdownRemark;
  const { previous, next } = props.pageContext;

  return (
    <App
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    >
      <Wrapper>
        <Article>
          <ArticleHeader>
            <Title
              as="h1"
              css={css`
                font-size: 4rem;
              `}
            >
              {post.frontmatter.title}
            </Title>
            <Time>{post.frontmatter.date}</Time>
            {post.frontmatter.tags && (
              <div
                css={css`
                  margin-top: 1.2rem;
                `}
              >
                <TagsList data={post.frontmatter.tags} />
              </div>
            )}
          </ArticleHeader>
          <section>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </section>
        </Article>

        <Nav>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </Nav>
      </Wrapper>
    </App>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
