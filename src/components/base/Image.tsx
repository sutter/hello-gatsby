import React, { SFC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  class?: string;
}

const Image: SFC<ImageProps> = ({ src, alt, width, height, ...rest }) => {
  return <img src={src} alt={alt} width={width} height={height} {...rest} />;
};

export default Image;
