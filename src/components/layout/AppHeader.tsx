import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { route } from '../../constants/app';
import AppLink from '../base/AppLink';
import ExternalLink from '../base/ExternalLink';
import Wrapper from '../base/Wrapper';
import NavButton from '../base/NavButton';
import { mqUp, mqDown, color, header } from '../../constants/styles';

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
    ${mqUp('mainNav')} {
      height: ${header.heightBase};
    }
  }
`;

const GridItemNavPose = posed.div({
  open: { height: 'auto' },
  close: { height: 0 },
});

const GridItemNav = styled(GridItemNavPose)`
  ${mqDown('mainNav')} {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: ${color.light};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
  }
  ${mqUp('mainNav')} {
    display: flex;
    align-items: center;
    &:not(:first-of-type) {
      margin-left: 3rem;
    }
  }
`;

const GridItemBrand = styled.div`
  display: flex;
  align-items: center;
  ${mqDown('mainNav')} {
    z-index: 2;
    position: relative;
    height: ${header.heightSmall};
  }
`;

const Nav = styled.nav`
  ${mqDown('mainNav')} {
    display: block;
    padding-top: calc(${header.heightSmall} + 2rem);
    padding-bottom: 2rem;
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
`;

const AppHeader = ({ navOpen, toggleNavMobile, closeNavMobile, ...rest }) => (
  <Container {...rest}>
    <Wrapper>
      <Grid>
        <GridItemBrand>
          <AppLink to={route.home}>LOGO</AppLink>
          <NavButton navOpen={navOpen} onClick={toggleNavMobile} />
        </GridItemBrand>
        <GridItemNav pose={navOpen ? 'open' : 'close'}>
          <Nav>
            <NavLinkStyled to={route.home}>Home</NavLinkStyled>
            <NavLinkStyled to={route.notFound}>Not found</NavLinkStyled>
            <NavLinkStyled to="https://sutterlity.fr">Portfolio</NavLinkStyled>
          </Nav>
        </GridItemNav>
      </Grid>
    </Wrapper>
  </Container>
);

export default AppHeader;
