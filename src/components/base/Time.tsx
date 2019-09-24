import React from 'react';
import styled from '@emotion/styled';
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

const getDate = (date: any) => date.toLocaleDateString('en-US', options);

const Time: React.FunctionComponent<TitleProps> = ({ date, ...rest }) => {
  const theDate = new Date(date);
  const theIsoDate = theDate.toISOString();
  return (
    <Element dateTime={theIsoDate} {...rest}>
      {getDate(theDate)}
    </Element>
  );
};

export default Time;
