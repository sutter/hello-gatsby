import React, { SFC, ReactNode } from 'react';
import { Link } from 'gatsby';

interface AppLinkInterface {
  to: string;
  children: ReactNode;
}

const AppLink: SFC<AppLinkInterface> = ({ children, to, ...rest }) => {
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};

export default AppLink;
