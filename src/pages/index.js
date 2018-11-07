import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { css } from "emotion";
// import { graphql } from "gatsby";
import App from "../components/layout/App";
import Title from "../components/atoms/Title";
import Link from "../components/atoms/Link";
import * as font from "../styles/fonts";

const IndexPage = props => {
  // const DATA = props.data.content.data;
  return (
    <App>
      <Title
        element="h1"
        className={css`
          font-size: ${font.XXXL};
        `}
      >
        Hello World {/*DATA.bigtitle*/}
      </Title>
      <div>
        <Link to="/404" element={GatsbyLink}>
          Not found page
        </Link>
      </div>
    </App>
  );
};

export default IndexPage;
// export const pageQuery = graphql`
//   query IndexQuery {
//     content: prismicHomepage {
//       data {
//         bigtitle
//       }
//     }
//   }
// `;
