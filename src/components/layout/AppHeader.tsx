import * as React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { route } from '../../constants/app';
import Link from '../base/Link';
import Wrapper from '../base/Wrapper';
import NavButton from '../base/NavButton';
import {
  mqUp,
  mqDown,
  color,
  header,
  breakpoint,
} from '../../constants/styles';

interface AppHeaderProps {
  navOpen: boolean;
  toggleNavMobile(): void;
  closeNavMobile(): void;
}

const Container = styled.header`
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Grid = styled.div`
  ${mqUp(breakpoint.mainNav)} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mqUp(breakpoint.mainNav)} {
      height: ${header.heightBase};
    }
  }
`;

const GridItemNavPose = posed.div({
  open: { height: 'auto' },
  close: { height: 0 },
});

const GridItemNav = styled(GridItemNavPose)`
  ${mqDown(breakpoint.mainNav)} {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: ${color.light};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
  }
  ${mqUp(breakpoint.mainNav)} {
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
  ${mqDown(breakpoint.mainNav)} {
    z-index: 2;
    position: relative;
    height: ${header.heightSmall};
  }
`;

const Nav = styled.nav`
  ${mqDown(breakpoint.mainNav)} {
    display: block;
    padding-top: calc(${header.heightSmall} + 2rem);
    padding-bottom: 2rem;
  }
  ${mqUp(breakpoint.mainNav)} {
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

const AppHeader: React.FunctionComponent<AppHeaderProps> = ({
  navOpen,
  toggleNavMobile,
  closeNavMobile,
  ...rest
}) => (
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
