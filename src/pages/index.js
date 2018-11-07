import React from "react";
// import { graphql } from "gatsby";
import App from "../components/layout/App";
import Content from "../components/molecules/Content";

const IndexPage = props => {
  // const DATA = props.data.content.data;
  return (
    <App>
      <Content>
        <h1>Hello World {/*DATA.bigtitle*/}</h1>
      </Content>
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
