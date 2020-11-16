import React from "react";
import { connect } from "react-redux";
import {
  Nav,
  NavContainer,
  LogoBox,
  NavMenuBox,
  NavMenu,
  NavItem,
  ButtonLoginIcon,
  ButtonLogoutIcon,
} from "./Navbar.elements";
import { LoginButton, LinkTag } from "../../GlobalStyles";
import Payments from "../payments/Payments";

const Navbar = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return null;
      case false:
        return (
          <React.Fragment>
            <NavItem to="/">Home</NavItem>
            <LoginButton to="/login">
              <ButtonLoginIcon /> Sign In
            </LoginButton>
          </React.Fragment>
        );

      default:
        return (
          <React.Fragment>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/surveys">Dashboard</NavItem>
            <Payments />
            <LoginButton to="/logout">
              <ButtonLogoutIcon /> Sign out
            </LoginButton>
          </React.Fragment>
        );
    }
  };

  return (
    <Nav>
      <NavContainer>
        <LogoBox>
          <LinkTag to={auth ? "/surveys" : "/"}>
            <h2>EmailY</h2>
          </LinkTag>
        </LogoBox>
        <NavMenuBox>
          <NavMenu>{renderContent()}</NavMenu>
        </NavMenuBox>
      </NavContainer>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Navbar);
