import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Wrapper from '../components/layout/Wrapper';
import App from '../components/layout/App';
import Title from '../components/base/Title';

interface Group {
  fieldValue: string;
  totalCount: number;
}

interface TagsPageProps {
  data: {
    allMarkdownRemark: {
      group: Group[];
    };
  };
}

const TagsPage: React.FunctionComponent<TagsPageProps> = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <App>
    <Wrapper>
      <Title
        as="h1"
        css={css`
          margin-bottom: 3.6rem;
        `}
      >
        Tags
      </Title>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  </App>
);
export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
