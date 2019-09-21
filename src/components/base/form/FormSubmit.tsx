import React from 'react';
import styled from '@emotion/styled';

interface FormSubmitProps {
  children: React.ReactNode;
}

const FormSubmitEl = styled.div<FormSubmitProps>`
  padding-top: 1.2rem;
  text-align: center;
`;

const FormSubmit: React.FunctionComponent<FormSubmitProps> = ({
  children,
  ...rest
}) => <FormSubmitEl {...rest}>{children}</FormSubmitEl>;

export default FormSubmit;
