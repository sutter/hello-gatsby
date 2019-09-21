import React from 'react';
import styled from '@emotion/styled';

interface FormProps {
  children: React.ReactNode;
}

const FormEl = styled.form<FormProps>``;

const Form: React.FunctionComponent<FormProps> = ({ children, ...rest }) => (
  <FormEl {...rest}>{children}</FormEl>
);

export default Form;
