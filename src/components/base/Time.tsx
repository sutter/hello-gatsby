import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import { FontSize, Color } from '../../enums/appStyles';

interface TitleProps {
  className?: string;
  date: string;
}

const Element = styled.time`
  font-size: ${FontSize.XS};
  color: ${Color.Neutral};
`;

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Time: React.FunctionComponent<TitleProps> = ({ date, ...rest }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            language
          }
        }
      }
    `,
  );
  const getDate = (data: any) =>
    data.toLocaleDateString(site.siteMetadata.language, options);
  const theDate = new Date(date);
  const theIsoDate = theDate.toISOString();

  return (
    <Element dateTime={theIsoDate} {...rest}>
      {getDate(theDate)}
    </Element>
  );
};

export default Time;
