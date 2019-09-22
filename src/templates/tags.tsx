import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Link from '../components/base/Link';
import Wrapper from '../components/layout/Wrapper';
import App from '../components/layout/App';
import BlogArticle from '../components/base/BlogArticle';
import Title from '../components/base/Title';

interface TagNode {
  node: {
    excerpt: string;
    frontmatter: {
      date: any;
      title: string;
      tags: [];
    };
    fields: {
      slug: string;
    };
  };
}

interface TagsProps {
  pageContext: {
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      edges: TagNode[];
      totalCount: number;
    };
  };
}

const Tags: React.FunctionComponent<TagsProps> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <App>
      <Wrapper>
        <Title
          as="h1"
          css={css`
            margin-bottom: 3.6rem;
          `}
        >
          {tagHeader}
        </Title>
        {edges.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <BlogArticle
              key={node.fields.slug}
              slug={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              tags={node.frontmatter.tags}
              css={css`
                &:not(:last-child) {
                  margin-bottom: 3.6rem;
                }
              `}
            />
          );
        })}
        <Link to="/tags">All tags</Link>
      </Wrapper>
    </App>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "en-EN")
            title
            tags
          }
        }
      }
    }
  }
`;
