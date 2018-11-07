import React from "react";
// import { graphql } from "gatsby";
import App from "../components/layout/App";
import Title from "../components/atoms/Title";
import * as font from "../styles/fonts";

const IndexPage = props => {
  // const DATA = props.data.content.data;
  return (
    <App>
      <Title element="h1" size={font.XXXL}>
        Hello World {/*DATA.bigtitle*/}
      </Title>
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
