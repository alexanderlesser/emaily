import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 10vh;
  background-color: #324c6b;
  z-index: 999;
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
`;

export const LogoBox = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavMenuBox = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: flex-end;
`;

export const NavMenu = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const NavItem = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: #000;
  position: relative;
  padding: 10px 20px;
`;
