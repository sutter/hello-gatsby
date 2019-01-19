import React from 'react';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';

const Element = styled.a``;

const Link = ({ children, href, ...rest }) => {
  return (
    <Element {...rest} href={href} as={href ? 'a' : GatsbyLink}>
      {children}
    </Element>
  );
};

export default Link;
