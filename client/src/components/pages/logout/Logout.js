import React from "react";
import Modal from "../../Modal";
import history from "../../../history";
import styled from "styled-components";

const LogoutButton = styled.a`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  border-radius: 5px;
  padding: 10px 30px;
  background-color: #ca0b00;
  margin-right: 20px;
  color: #fff;
`;

const CancelButton = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px 30px;
  cursor: pointer;
  background-color: #696b6a;
  color: #fff;
`;

const onDismiss = () => {
  history.push("/");
};

const actions = (
  <React.Fragment>
    <LogoutButton href="/api/logout">Sign out</LogoutButton>
    <CancelButton onClick={() => history.push("/")}>cancel</CancelButton>
  </React.Fragment>
);

const Logout = () => {
  return (
    <div>
      <Modal
        onDismiss={onDismiss}
        actions={actions}
        title="Sign out"
        description="Are you sure you want to sign out?"
      />
    </div>
  );
};

export default Logout;
