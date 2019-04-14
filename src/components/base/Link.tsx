import React, { SFC, ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps {
  to: string;
  children: ReactNode | string;
  activeClassName?: string;
}

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

const AppLink: SFC<LinkProps> = ({
  children,
  to,
  activeClassName,
  ...rest
}) => {
  return (
    <GatsbyLink
      to={to}
      activeClassName={activeClassName || 'is-active'}
      {...rest}
    >
      {children}
    </GatsbyLink>
  );
};

const ExternalLink: SFC<ExternalLinkProps> = ({ children, href, ...rest }) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
};

const Link: SFC<LinkProps> = ({ to, children, activeClassName, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <AppLink to={to} activeClassName={activeClassName} {...rest}>
        {children}
      </AppLink>
    );
  } else {
    return (
      <ExternalLink href={to} {...rest}>
        {children}
      </ExternalLink>
    );
  }
};

export default Link;
