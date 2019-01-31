import React, { SFC, ReactNode } from 'react';

interface ExternalLinkInterface {
  href: string;
  children: ReactNode;
}

const ExternalLink: SFC<ExternalLinkInterface> = ({
  children,
  href,
  ...rest
}) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
