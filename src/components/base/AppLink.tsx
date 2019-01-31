import React, { SFC, ReactNode } from 'react';
import { Link } from 'gatsby';

interface AppLinkProps {
  to: string;
  children: ReactNode;
  activeStyle?: object;
}

const AppLink: SFC<AppLinkProps> = ({ children, to, activeStyle, ...rest }) => {
  return (
    <Link to={to} activeStyle={activeStyle} {...rest}>
      {children}
    </Link>
  );
};

export default AppLink;
