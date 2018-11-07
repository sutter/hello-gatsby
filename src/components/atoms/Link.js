import React from "react";
import { cx, css } from "emotion";
import * as link from "../../styles/links";

const Link = ({ element, ...props }) => {
  props.href = props.to;
  return React.createElement(element, {
    ...props,
    className: cx(
      props.className,
      css`
        ${link.styleBase}
      `
    ),
  });
};

export default Link;
