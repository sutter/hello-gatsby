import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import * as link from '../../styles/links';

const Link = ({ element, disabled, ...props }) => {
  props.href = props.to;
  return React.createElement(element, {
    ...props,
    className: cx(
      props.className,
      css`
        ${link.styleBase}
        opacity: ${props => (disabled ? 0.5 : 1)};
        pointer-events: ${props => (disabled ? 'none' : 'auto')};
      `,
    ),
  });
};

Link.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Link.defaultProps = {
  element: 'a',
  disabled: false,
};

export default Link;
