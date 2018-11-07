import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import * as link from '../../styles/links';

const Link = ({ element, ...props }) => {
  props.href = props.to;
  return React.createElement(element, {
    ...props,
    className: cx(
      props.className,
      css`
        ${link.styleBase}
      `,
    ),
  });
};
Link.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
Link.defaultProps = {
  element: 'a',
};

export default Link;
