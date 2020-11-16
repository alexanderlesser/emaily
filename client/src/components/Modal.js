import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const ModalBackground = styled.div`
  position: fixed;
  background-color: #6a6e6b;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const ContentBox = styled.div`
  position: fixed;
  background-color: #fff;
  /* width: 50%;
  height: 50%; */
  padding: 0 50px;
  padding-bottom: ${({ login }) => (login ? "30px" : "")};
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(50, 50, 50, 0.8);
  -moz-box-shadow: 0px 0px 20px 0px rgba(50, 50, 50, 0.8);
  box-shadow: 0px 0px 20px 0px rgba(50, 50, 50, 0.8);
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 50%;
    padding: 0 30px;
    padding-bottom: ${({ login }) => (login ? "30px" : "")};
  }
`;

const Headertext = styled.h1`
  margin-top: 10px;
  margin-bottom: 50px;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  color: #000;
  top: 5px;
  right: 5px;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Message = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 50px;
  text-align: center;
`;

const ActionsBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: ${({ login }) => (login ? "column" : "row")};
  justify-content: center;
  padding-bottom: ${({ login }) => (login ? "30px" : "")};
  align-items: center;
`;

const Modal = ({ onDismiss, actions, description, title, login }) => {
  return ReactDOM.createPortal(
    <ModalBackground onClick={onDismiss}>
      <ContentBox login={login} onClick={(event) => event.stopPropagation()}>
        <CloseIcon onClick={onDismiss} />
        <Headertext>{title}</Headertext>
        <Message>{description}</Message>
        <ActionsBox login={login}>{actions}</ActionsBox>
      </ContentBox>
    </ModalBackground>,
    document.querySelector("#modal")
  );
};

export default Modal;
