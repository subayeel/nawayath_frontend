import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Modal from "react-modal";
import { BtnContainer, Button } from "../RegisterPage/RegisterPage.elements";

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
import { authentication } from "../../config";

const Sidebar = ({ isOpen, toggle, isAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // to open the rules modal
  const [modalState, setModalState] = useState(false);
  const [ownerModalState, setOwnerModalState] = useState(false);

  function openOwnerModal() {
    setOwnerModalState(true);
    toggle()

  }
  function closeOwnerModal() {
    setOwnerModalState(false);
    
  }

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

  const handleSignOut = () => {
    authentication
      .signOut()
      .then(() => {
        // Sign-out successful.

        console.log("Logged out");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    toggle();
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
      {/* owner Model */}
      <Modal
        style={customStyles}
        onRequestClose={closeOwnerModal}
        handleState={setOwnerModalState}
        isOpen={ownerModalState}
      >
        <ModalContent>
          <CloseIcon onClick={closeOwnerModal} />

          <ImgWrap>
            <Img
              loading="lazy"
              src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/closed.png?alt=media&token=0957f6f3-a13d-4399-8d94-d69a91e51e3b"
            />
          </ImgWrap>
          <Text3>Team Owner Registration has been Closed!</Text3>
          <HighlitedText>
            <Button onClick={closeOwnerModal}>Ok</Button>
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
            onClick={openOwnerModal}
            className={location.pathname === "/our-team" ? "active" : ""}
            
            to="/our-team"
          >
            Meet Our team
          </SidebarLink>
          <SidebarLink
            className={location.pathname === "/player-register" ? "active" : ""}
            onClick={() => {
              toggle();
              setModalState(true);
            }}
            to=""
          >
            NCV-V Teams
          </SidebarLink>
          
              
          <BtnContainer>
            {isAuth ? (
              <>
                <Button onClick={handleSignOut} to="/">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  className={
                    location.pathname === "/owner-login" ? "active" : ""
                  }
                  onClick={toggle}
                  to="/owner-login"
                >
                  Login as Owner
                </Button>
              </>
            )}
          </BtnContainer>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
