import React, { SFC, ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  href: string;
  children: ReactNode;
}

const ExternalLink: SFC<ContainerProps> = ({
  children,
  href,
  className,
  ...rest
}) => {
  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
