import React from "react";
import { css } from "emotion";
import * as link from "../../styles/links";

const Link = ({ element, ...props }) => {
  props.href = props.to;
  props.className = css`
    ${link.styleBase}
  `;
  return React.createElement(element, props);
};

export default Link;
