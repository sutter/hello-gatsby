import React from 'react';
import { graphql } from 'gatsby';
import Wrapper from '../components/layout/Wrapper';
import App from '../components/layout/App';
import BlogArticle from '../components/base/BlogArticle';
import Pagination from '../components/base/Pagination';

interface PostNode {
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

interface BlogPageProps {
  data: {
    allMarkdownRemark: {
      edges: PostNode[];
    };
  };
  pageContext: {
    currentPage: number;
    pageCount: number;
  };
}

const BlogPostListPage: React.FunctionComponent<BlogPageProps> = ({
  data,
  pageContext,
}) => {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, pageCount } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === pageCount;
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/${(currentPage - 1).toString()}`;
  const nextPage = `/blog/${(currentPage + 1).toString()}`;

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
              tags={node.frontmatter.tags}
            />
          );
        })}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPageUrl={prevPage}
          nextPageUrl={nextPage}
        />
      </Wrapper>
    </App>
  );
};

export default BlogPostListPage;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
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
