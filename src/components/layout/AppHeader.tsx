import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { Route } from '../../enums/app';
import Link from '../base/Link';
import Wrapper from '../base/Wrapper';
import NavButton from '../base/NavButton';
import { MqUp, MqDown, Color, Header, Breakpoint } from '../../enums/appStyles';

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
  ${MqUp(Breakpoint.MainNav)} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${MqUp(Breakpoint.MainNav)} {
      height: ${Header.HeightBase};
    }
  }
`;

const GridItemNavPose = posed.div({
  open: { height: 'auto' },
  close: { height: 0 },
});

const GridItemNav = styled(GridItemNavPose)`
  ${MqDown(Breakpoint.MainNav)} {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: ${Color.Light};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
  }
  ${MqUp(Breakpoint.MainNav)} {
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
  ${MqDown(Breakpoint.MainNav)} {
    z-index: 2;
    position: relative;
    height: ${Header.HeightSmall};
  }
`;

const Nav = styled.nav`
  ${MqDown(Breakpoint.MainNav)} {
    display: block;
    padding-top: calc(${Header.HeightSmall} + 2rem);
    padding-bottom: 2rem;
  }
  ${MqUp(Breakpoint.MainNav)} {
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
    color: ${Color.Neutral};
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
          <Link to={Route.Home}>LOGO</Link>
          <NavButton navOpen={navOpen} onClick={toggleNavMobile} />
        </GridItemBrand>
        <GridItemNav pose={navOpen ? 'open' : 'close'}>
          <Nav>
            <NavLink to={Route.Home}>Home</NavLink>
            <NavLink to="https://github.com/sutter/hello-gatsby">
              Repository
            </NavLink>
          </Nav>
        </GridItemNav>
      </Grid>
    </Wrapper>
  </Container>
);

export default AppHeader;
