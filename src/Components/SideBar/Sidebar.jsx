import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import  Modal  from "react-modal";
import { Button } from "../RegisterPage/RegisterPage.elements";


import {
  SidebarContainer,
  SidebarWrapper,
  SidebarLink,
  SidebarBtnWrap,
  SidebarMenu,
  RoundedBtn,
  CloseIcon,
  LogoContainer,
  Text3,
  Img,
  ImgWrap,
  ModalContent,
  HighlitedText,
} from "./Sidebar.elements";

const Sidebar = ({ isOpen, toggle }) => {
  const location = useLocation();

  // to open the rules modal
  const [modalState, setModalState] = useState(false);
  function openModal() {
    setModalState(true);
  }
  function closeModal() {
    setModalState(false);
  }
  const customStyles = {
    content: {
      width: "40%",
      height: "40%",
      position: "absolute",
      overflow: "hidden",
      left: "50%",
      top: "55%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <CloseIcon onClick={toggle} />
      <Modal
        style={customStyles}
        onRequestClose={closeModal}
        handleState={setModalState}
        isOpen={modalState}
      >
        <ModalContent>
          <CloseIcon onClick={closeModal} />

          <ImgWrap>
            <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/closed.png?alt=media&token=0957f6f3-a13d-4399-8d94-d69a91e51e3b" />
          </ImgWrap>
          <Text3>Player Registration has been Closed!</Text3>
          <HighlitedText>
            <Button onClick={closeModal}>Ok</Button>
          </HighlitedText>
        </ModalContent>
      </Modal>
      <SidebarWrapper>
        <LogoContainer>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/nc%20logo.png?alt=media&token=ba54c1fc-7bf8-44ba-bb93-da422b730434"
            alt=""
          />
        </LogoContainer>
        <SidebarMenu>
          <SidebarLink
            className={location.pathname === "/" ? "active" : ""}
            onClick={toggle}
            to="/"
          >
            Home
          </SidebarLink>

          <SidebarLink
            className={location.pathname === "/owner-register" ? "active" : ""}
            onClick={toggle}
            to="/owner-register"
          >
            Owner Registeration
          </SidebarLink>
          <SidebarLink
            className={location.pathname === "/player-register" ? "active" : ""}
            // onClick={() =>{ toggle(); setModalState(true)}}
            to="/player-register"
          >
            Player Registeration
          </SidebarLink>
          <SidebarLink
            className={
              location.pathname === "/volunteer-register" ? "active" : ""
            }
            onClick={toggle}
            to="/volunteer-register"
          >
            Volunteer Registeration
          </SidebarLink>
          <SidebarLink
            className={
              location.pathname === "/volunteer-register" ? "active" : ""
            }
            onClick={toggle}
            to="/ourteam"
          >
            Meet Our Team
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
