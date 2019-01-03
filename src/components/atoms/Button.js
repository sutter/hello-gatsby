import styled from '@emotion/styled';
import { rem } from 'polished';
import * as radius from '../../styles/radius.js';
import * as color from '../../styles/colors';
import * as state from '../../styles/state';

const Button = styled.a`
  display: inline-flex;
  min-height: ${rem(40)};
  padding: ${rem(12)} ${rem(20)};
  text-align: center;
  text-decoration: none;
  color: ${color.light};
  background: ${color.clr1};
  font-family: inherit;
  font-size: inherit;
  line-height: 1;
  border: none;
  border-radius: ${radius.S};
  opacity: ${props => (props.disabled ? state.disabledOpacity : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  cursor: pointer;
  user-select: none;
  &:hover,
  &:focus,
  &:active {
    background-color: ${color.clr1Light};
    color: ${color.light};
  }
`;

export default Button;
