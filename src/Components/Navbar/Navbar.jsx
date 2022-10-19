import React, { useState } from "react";
import Modal from "react-modal";
import "./Nav.css";
import {
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavbarContainer,
  NavLinks,
  NavDropDown,
  DropdownContent,
  DropDownItem,
  BarsIcon,
  CloseIcon,
  Text3,
  Img,
  ImgWrap,
  ModalContent,
  HighlitedText,
} from "./Navbar.elements";

import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../RegisterPage/RegisterPage.elements";
import { IconContext } from "react-icons";

function Navbar({ toggle, isOpen }) {
  const navigate = useNavigate();
  const [isHome, setHome] = useState(true);
  const [rDropState, setRDropState] = useState(false);
  const [subMenuState, setSubMenu] = useState(false);
  const location = useLocation();

  function handleClick() {
    setHome(!isHome);
  }

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
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          {isOpen ? <CloseIcon /> : <BarsIcon />}
        </MobileIcon>
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
        <NavLogo to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/nc%20logo.png?alt=media&token=ba54c1fc-7bf8-44ba-bb93-da422b730434"
            alt=""
          />
        </NavLogo>

        <NavMenu>
          <NavItem>
            <NavLinks
              className={location.pathname === "/" ? "active" : ""}
              onClick={handleClick}
              state={isHome}
              to="/"
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavDropDown
              onMouseEnter={() => setRDropState(true)}
              onMouseLeave={() => setRDropState(false)}
              onClick={() => navigate("/register-option")}
              className={
                location.pathname === "/register-option" ? "active" : ""
              }
            >
              NCL-V-2022
            </NavDropDown>
            <DropdownContent
              state={rDropState}
              onMouseEnter={() => setRDropState(true)}
              onMouseLeave={() => setRDropState(false)}
            >
              <DropdownContent
                state={rDropState}
                onMouseEnter={() => setSubMenu(true)}
                onMouseLeave={() => setSubMenu(false)}
                lmargin="48px"
              >
                <DropDownItem></DropDownItem>
                <NavLinks
                  className={
                    location.pathname === "/owner-register" ? "active" : ""
                  }
                  to="/owner-register"
                >
                  Owner Registration
                </NavLinks>
                <NavLinks
                  // onClick={() => setModalState(true)}
                  className={
                    location.pathname === "/player-register" ? "active" : ""
                  }
                  to="/player-register"
                >
                  Player Registration
                </NavLinks>
                <NavLinks
                  className={
                    location.pathname === "/volunteer-register" ? "active" : ""
                  }
                  to="/volunteer-register"
                >
                  Volunteer Registration
                </NavLinks>
              </DropdownContent>
            </DropdownContent>
          </NavItem>
          <NavItem>
            <NavLinks
              className={location.pathname === "/ourteam" ? "active" : ""}
              to="/ourteam"
            >
              Our Team
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
