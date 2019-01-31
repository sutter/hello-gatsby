import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { route } from '../../constants/app';
import AppLink from '../base/AppLink';
import ExternalLink from '../base/ExternalLink';
import Wrapper from '../base/Wrapper';
import NavButton from '../base/NavButton';
import { mqUp, mqDown, color } from '../../constants/styles';

const Container = styled.header`
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Grid = styled.div`
  ${mqUp('mainNav')} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  ${mqUp('mainNav')} {
    &:not(:first-child) {
      margin-left: 3rem;
    }
  }
`;

interface NavProps {
  navOpen: boolean;
}

const Nav = styled.nav<NavProps>`
  ${mqDown('mainNav')} {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    visibility: ${props => (props.navOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.navOpen ? 1 : 0)};
    background: ${color.light};
  }
  ${mqUp('mainNav')} {
    display: flex;
    align-items: center;
    > * {
      margin-left: 1rem;
    }
  }
`;

interface NavLinkProps {
  to: string;
  children: ReactNode;
  activeStyle?: object;
}

const NavLink: SFC<NavLinkProps> = ({ to, children, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <AppLink to={to} activeStyle={{ color: color.clr1Light }} {...rest}>
        {children}
      </AppLink>
    );
  } else {
    return (
      <ExternalLink href={to} {...rest}>
        {children}
      </ExternalLink>
    );
  }
};

const NavLinkStyled = styled(NavLink)`
  display: block;
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  ${mqUp('mainNav')} {
  }
`;

const AppHeader = ({ navOpen, toggleNavMobile, closeNavMobile, ...rest }) => (
  <Container {...rest}>
    <Wrapper>
      <Grid>
        <GridItem>
          <AppLink to={route.home}>LOGO</AppLink>
          <NavButton onClick={toggleNavMobile} />
        </GridItem>
        <GridItem>
          <Nav navOpen={navOpen}>
            <NavLinkStyled to={route.home}>Home</NavLinkStyled>
            <NavLinkStyled to={route.notFound}>Not found</NavLinkStyled>
            <NavLinkStyled to="https://sutterlity.fr">Portfolio</NavLinkStyled>
          </Nav>
        </GridItem>
      </Grid>
    </Wrapper>
  </Container>
);

export default AppHeader;
