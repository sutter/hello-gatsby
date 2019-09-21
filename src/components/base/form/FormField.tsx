import React from 'react';
import styled from '@emotion/styled';
import InputLabel from '../input/InputLabel';

interface FormFieldProps {
  children: React.ReactNode;
  label?: string;
}

const FormFieldEl = styled.div<FormFieldProps>`
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

const FormField: React.FunctionComponent<FormFieldProps> = ({
  children,
  label,
  ...rest
}) => (
  <FormFieldEl {...rest}>
    {label && <InputLabel>{label}</InputLabel>}
    {children}
  </FormFieldEl>
);

export default FormField;
