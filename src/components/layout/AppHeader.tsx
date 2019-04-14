import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { route } from '../../constants/app';
import AppLink from '../base/AppLink';
import Link from '../base/Link';
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

const NavLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  &.is-active {
    color: ${color.neutral};
  }
`;

const AppHeader = ({ navOpen, toggleNavMobile, closeNavMobile, ...rest }) => (
  <Container {...rest}>
    <Wrapper>
      <Grid>
        <GridItemBrand>
          <Link to={route.home}>LOGO</Link>
          <NavButton navOpen={navOpen} onClick={toggleNavMobile} />
        </GridItemBrand>
        <GridItemNav pose={navOpen ? 'open' : 'close'}>
          <Nav>
            <NavLink to={route.home}>Home</NavLink>
            <NavLink to={route.notFound}>Not found</NavLink>
            <NavLink to="https://sutterlity.fr">Portfolio</NavLink>
          </Nav>
        </GridItemNav>
      </Grid>
    </Wrapper>
  </Container>
);

export default AppHeader;
