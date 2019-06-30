import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
  lang?: string;
  title?: string;
  description?: string;
  image?: string;
}

const SEO: React.FunctionComponent<SeoProps> = props => {
  const { title, description, image, lang } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            pathPrefix
            twitterUser
          }
        }
      }
    `,
  );
  const defaultData = site.siteMetadata;

  return (
    <Helmet>
      <html lang={lang} />

      {/* Primary Meta Tags */}
      <title>{title || defaultData.title}</title>
      <meta name="title" content={title || defaultData.Title} />
      <meta
        name="description"
        content={description || defaultData.description}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={defaultData.siteUrl + defaultData.pathPrefix}
      />
      <meta property="og:title" content={title || defaultData.title} />
      <meta
        property="og:description"
        content={description || defaultData.description}
      />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter*/}
      <meta property="twitter:card" content="summary_large_image" />
      {defaultData.twitterUser && (
        <meta name="twitter:creator" content={defaultData.twitterUser} />
      )}
      <meta
        property="twitter:url"
        content={defaultData.siteUrl + defaultData.pathPrefix}
      />
      <meta name="twitter:title" content={title || defaultData.title} />
      <meta
        name="twitter:description"
        content={description || defaultData.description}
      />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
