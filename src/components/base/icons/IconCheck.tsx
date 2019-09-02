import React from 'react';
import { IconInterface } from '../../../appInterface';

const IconCheck: React.FunctionComponent<IconInterface> = ({
  size = 16,
  stroke = 'currentColor',
  strokeWidth = 2,
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...rest}>
    <title>{'check'}</title>
    <path
      stroke={stroke}
      d="M12.113 5.153L7 10.944l-2.308-2.38"
      strokeWidth={strokeWidth}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconCheck;
