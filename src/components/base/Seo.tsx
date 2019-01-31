import React, { SFC } from 'react';
import Helmet from 'react-helmet';
import config from '../../../config';

interface SeoInterface {
  lang?: string;
  title: string;
  description: string;
  image?: string;
}

const SEO: SFC<SeoInterface> = props => {
  const { title, description, image, lang } = props;
  return (
    <Helmet>
      <html lang={lang} />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.siteUrl + config.pathPrefix} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter*/}
      <meta property="twitter:card" content="summary_large_image" />
      {config.userTwitter && (
        <meta name="twitter:creator" content={config.userTwitter} />
      )}
      <meta
        property="twitter:url"
        content={config.siteUrl + config.pathPrefix}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: config.siteLanguage,
  title: config.siteTitle,
  description: config.siteDescription,
};

export default SEO;
