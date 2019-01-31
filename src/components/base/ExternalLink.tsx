import React, { SFC, ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

const ExternalLink: SFC<ExternalLinkProps> = ({ children, href, ...rest }) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
