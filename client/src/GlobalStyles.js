import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`;

export const Container = styled.div`
  margin: 0 20px;
`;

export const LoginButton = styled(Link)`
  text-decoration: none;
  background-color: #3b3e47;
  color: #fff;
  border-radius: 4px;
  padding: 10px 20px;
`;

export default GlobalStyles;
