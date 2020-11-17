import React from "react";
import Modal from "../../Modal";
import history from "../../../history";
import styled from "styled-components";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";

const GoogleButton = styled.a`
  list-style: none;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: 5px 0;
  border-radius: 5px;
  padding: 10px 0;
  padding-right: 30px;
  padding-left: 20px;
  background-color: #de5246;
  color: #fff;

  &:hover {
    background: #d62020;
    color: #fff;
  }
`;

const FacebookButton = styled.a`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px 0;
  padding-right: 30px;
  padding-left: 10px;
  background-color: #3b5998;
  color: #fff;

  &:hover {
    background-color: #005dd6;
    color: #fff;
  }
`;

const IconBox = styled.div`
  height: 100%;
  width: 20px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const onDismiss = () => {
  history.push("/");
};

const actions = (
  <React.Fragment>
    <GoogleButton href="/auth/google">
      <IconBox>
        <FaGoogle />
      </IconBox>
      Sign in With Google
    </GoogleButton>
    <FacebookButton href="/auth/facebook">
      <IconBox>
        <FaFacebookSquare />
      </IconBox>
      Sign in with Facebook
    </FacebookButton>
  </React.Fragment>
);

const Login = () => {
  return (
    <div>
      <Modal
        onDismiss={onDismiss}
        actions={actions}
        title="Log in"
        description="You can log in with your google or facebook account"
        login={true}
      />
    </div>
  );
};

export default Login;
