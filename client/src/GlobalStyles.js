import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
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
`;

export default GlobalStyles;
