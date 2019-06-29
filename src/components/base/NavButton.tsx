import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import posed from 'react-pose';
import { ButtonBaseInterface } from '../../appInterface';
import { MqUp, Color, Breakpoint } from '../../enums/appStyles';

interface ButtonProps extends ButtonBaseInterface {
  navOpen: boolean;
}

const Button = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0 1rem;
  line-height: 3rem;
  height: 3rem;
  cursor: pointer;
  margin-left: auto;
  ${MqUp(Breakpoint.MainNav)} {
    display: none;
  }
`;

const Text = styled.div`
  color: transparent;
`;

const LineTop = posed.div({
  open: { transform: 'translateY(0px)' },
  close: { transform: 'translateY(-6px)' },
});
const LineMiddle = posed.div({
  open: { opacity: 0, transform: 'scale(0)' },
  close: { opacity: 1, transform: 'scale(1)' },
});
const LineBottom = posed.div({
  open: { transform: 'translateY(0px)' },
  close: { transform: 'translateY(6px)' },
});

const Lines = css`
  position: absolute;
  top: calc(50% - 0.1rem);
  left: calc(50% - 1rem);
  height: 0.2rem;
  width: 2rem;
  background: ${Color.Clr1};
  border-radius: 666rem;
`;

const NavButton: React.FunctionComponent<ButtonProps> = ({
  onClick,
  navOpen,
  ...rest
}) => (
  <Button onClick={onClick} {...rest}>
    <Text>Menu</Text>
    <LineTop css={Lines} pose={navOpen ? 'open' : 'close'} />
    <LineMiddle css={Lines} pose={navOpen ? 'open' : 'close'} />
    <LineBottom css={Lines} pose={navOpen ? 'open' : 'close'} />
  </Button>
);

export default NavButton;
