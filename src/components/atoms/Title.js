import React from "react";
import { cx, css } from "emotion";
import * as font from "../../styles/fonts.js";

const Title = ({ element, ...props }) => {
  props.href = props.to;
  return React.createElement(element, {
    ...props,
    className: cx(
      props.className,
      css`
        font-weight: ${font.weightBold};
        line-height: ${font.lineHeightL};
      `
    ),
  });
};

export default Title;
