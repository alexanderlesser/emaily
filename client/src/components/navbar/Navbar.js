import React from "react";
import { connect } from "react-redux";
import { SiMinutemailer } from "react-icons/si";
import {
  Nav,
  NavContainer,
  LogoBox,
  NavMenuBox,
  NavMenu,
  NavItem,
  Credits,
  Logo,
} from "./Navbar.elements";
import {
  LoginButton,
  LinkTag,
  LogoutButton,
  ButtonLoginIcon,
  ButtonLogoutIcon,
} from "../../GlobalStyles";
import Payments from "../payments/Payments";

const Navbar = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
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
            <Credits>Credits:{auth.credits}</Credits>
            <LogoutButton href="/api/logout">
              <ButtonLogoutIcon /> Sign out
            </LogoutButton>
          </React.Fragment>
        );
    }
  };

  return (
    <Nav>
      <NavContainer>
        <LogoBox>
          <LinkTag to={auth ? "/surveys" : "/"}>
            <Logo>
              <SiMinutemailer />
              EmailY
            </Logo>
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
