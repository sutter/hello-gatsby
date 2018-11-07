import React from "react";
import { css } from "emotion";
import * as font from "../../styles/fonts.js";

const title = css`
  font-weight: ${font.weightBold};
  line-height: ${font.lineHeightL};
`;

const Title = ({ element, ...props }) => {
  props.href = props.to;
  props.className = css`
    ${title};
    font-size: ${props.size};
  `;
  return React.createElement(element, props);
};

export default Title;
