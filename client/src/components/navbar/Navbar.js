import React from "react";
import {
  Nav,
  NavContainer,
  LogoBox,
  NavMenuBox,
  NavMenu,
  NavItem,
} from "./Navbar.elements";
import { LoginButton } from "../../GlobalStyles";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <LogoBox>
          <h2>EmailY</h2>
        </LogoBox>
        <NavMenuBox>
          <NavMenu>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/">About</NavItem>
            <LoginButton to="/">Sign In</LoginButton>
          </NavMenu>
        </NavMenuBox>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
