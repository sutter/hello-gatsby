import * as React from 'react';
import Helmet from 'react-helmet';
import * as config from '../../config';

interface SeoProps {
  lang?: string;
  title?: string;
  description?: string;
  image?: string;
}

const SEO: React.SFC<SeoProps> = props => {
  const { title, description, image, lang } = props;
  return (
    <Helmet>
      <html lang={lang} />

      {/* Primary Meta Tags */}
      <title>{title || config.siteTitle}</title>
      <meta name="title" content={title || config.siteTitle} />
      <meta
        name="description"
        content={description || config.siteDescription}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.siteUrl + config.pathPrefix} />
      <meta property="og:title" content={title || config.siteTitle} />
      <meta
        property="og:description"
        content={description || config.siteDescription}
      />
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
      <meta name="twitter:title" content={title || config.siteTitle} />
      <meta
        name="twitter:description"
        content={description || config.siteDescription}
      />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
