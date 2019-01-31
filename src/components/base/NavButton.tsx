import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { ButtonBaseInterface } from '../../appInterface';
import { mqUp, color } from '../../constants/styles';

const Button = styled.button`
  border: none;
  background: transparent;
  padding: 0 1rem;
  line-height: 3rem;
  height: 3rem;
  cursor: pointer;
  margin-left: auto;
  ${mqUp('mainNav')} {
    display: none;
  }
`;

const Text = styled.div`
  position: relative;
  font-size: 0;
  height: 0.2rem;
  width: 2rem;
  background: ${color.clr1};
  border-radius: 666rem;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 0.2rem;
    width: 2rem;
    background: ${color.clr1};
    border-radius: 666rem;
  }
  &::before {
    top: -0.5rem;
  }
  &::after {
    bottom: -0.5rem;
  }
`;

const NavButton: SFC<ButtonBaseInterface> = ({ onClick, ...rest }) => (
  <Button onClick={onClick} {...rest}>
    <Text>Menu</Text>
  </Button>
);

export default NavButton;
