import React from "react";
import Payments from "../../payments/Payments";
import { LogoutButton, ButtonLogoutIcon } from "../../../GlobalStyles";
import {
  MenuBox,
  Menu,
  MenuItem,
  MenuItemBold,
  DashBoardIcon,
  PayButtonBox,
  MenuHeaderBox,
  MenuHeader,
  LogOutButtonBox,
} from "./DashBoard.elements";

const Dashboard = () => {
  return (
    <div>
      <MenuBox>
        <Menu>
          <MenuHeaderBox>
            <MenuHeader>Menu</MenuHeader>
          </MenuHeaderBox>
          <MenuItemBold to="survey">
            <DashBoardIcon />
            Dashboard
          </MenuItemBold>
          <MenuItem to="/">Create survey</MenuItem>
          <PayButtonBox>
            <Payments />
          </PayButtonBox>
        </Menu>
        <LogOutButtonBox>
          <LogoutButton href="/api/logout">
            <ButtonLogoutIcon />
            Sign Out
          </LogoutButton>
        </LogOutButtonBox>
      </MenuBox>
    </div>
  );
};

export default Dashboard;
