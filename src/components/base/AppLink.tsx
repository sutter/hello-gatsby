import React, { SFC, ReactNode } from 'react';
import { Link } from 'gatsby';

interface ContainerProps {
  className?: string;
  to: string;
  rel?: string;
  children: ReactNode;
}

const AppLink: SFC<ContainerProps> = ({
  children,
  to,
  className,
  rel,
  ...rest
}) => {
  return (
    <Link className={className} to={to} rel={rel} {...rest}>
      {children}
    </Link>
  );
};

export default AppLink;
