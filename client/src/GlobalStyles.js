import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
  background-color: #fff;
}
`;

export const Container = styled.div`
  margin: 0 20px;
`;

export const LinkTag = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const LoginButton = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  background-color: #3b3e47;
  color: #fff;
  border-radius: 4px;
  padding: 10px 0;
  padding-right: 30px;
  padding-left: 10px;

  &:hover {
    color: red;
  }
`;

export const LogoutButton = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  background-color: #ca0b00;
  color: #fff;
  border-radius: 4px;
  padding: 10px 0;
  padding-right: 30px;
  padding-left: 10px;

  &:hover {
    background: #960505;
    color: #fff;
  }
`;

export const ButtonLoginIcon = styled(RiLoginCircleLine)`
  color: #fff;
  margin-right: 10px;
  font-size: 1.5rem;
`;

export const ButtonLogoutIcon = styled(RiLogoutCircleLine)`
  color: #fff;
  margin-right: 10px;
  font-size: 1.5rem;
`;

export default GlobalStyles;
