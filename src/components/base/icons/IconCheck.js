import React from 'react';

const SvgComponent = props => (
  <svg
    width={props.size || 16}
    height={props.size || 16}
    viewBox="0 0 16 16"
    {...props}
  >
    <title>{'check'}</title>
    <path
      stroke={props.stroke || 'currentColor'}
      d="M12.113 5.153L7 10.944l-2.308-2.38"
      strokeWidth={props.strokeWidth || 2}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
