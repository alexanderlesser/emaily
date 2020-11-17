import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineDashboard } from "react-icons/ai";

export const MenuBox = styled.div`
  height: 90vh;
  width: 200px;
  background-color: aliceblue;
  border-right: 2px solid #b2b3b8;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  list-style: none;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const MenuHeaderBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #b2b3b8;
  text-align: center;
  padding-bottom: 15px;
`;

export const MenuHeader = styled.h2`
  color: #646569;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  color: #8f9094;
  font-size: 0.9rem;

  &:hover {
    color: #646569;
  }
`;

export const MenuItemBold = styled(Link)`
  text-decoration: none;
  color: #2845bd;
  font-weight: 700;
  font-size: 1rem;
  padding: 10px 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #3d54b3;
  }
`;

export const DashBoardIcon = styled(AiOutlineDashboard)`
  color: #2845bd;
  font-size: 1.5rem;
  margin-right: 10px;
`;

export const MenuButton = styled.div`
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: #8f9094;
`;

export const PayButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const LogOutButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
