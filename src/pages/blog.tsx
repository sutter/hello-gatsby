import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Wrapper from '../components/layout/Wrapper';
import App from '../components/layout/App';
import BlogArticle from '../components/base/BlogArticle';

interface PostNode {
  node: {
    excerpt: string;
    frontmatter: {
      date: any;
      title: string;
    };
    fields: {
      slug: string;
    };
  };
}

interface BlogPageProps {
  data: {
    allMarkdownRemark: {
      edges: PostNode[];
    };
  };
}

const BlogPage: React.FunctionComponent<BlogPageProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <App title="Blog">
      <Wrapper>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <BlogArticle
              key={node.fields.slug}
              slug={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              css={css`
                &:not(:last-child) {
                  margin-bottom: 3.6rem;
                }
              `}
            />
          );
        })}
      </Wrapper>
    </App>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "en-EN")
            title
          }
        }
      }
    }
  }
`;
