import React, { useState } from "react";
import Modal from "react-modal";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../config";
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
  Line,
} from "./Navbar.elements";

import Avatar from "./Avatar";
import { authentication } from "../../config";

import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../RegisterPage/RegisterPage.elements";


function Navbar({ toggle, isOpen, setAuth, isAuth, imageUrl, isAdmin }) {
  const navigate = useNavigate();
  const [isHome, setHome] = useState(true);
  const [rDropState, setRDropState] = useState(false);
  const [subMenuState, setSubMenu] = useState(false);
  const [profileDropdown, setProfileDropDown] = useState(false);
  const location = useLocation();

  //handle get data
  //states for data
  

  function handleClick() {
    setHome(!isHome);
  }

  const handleSignOut = () => {
    authentication
      .signOut()
      .then(() => {
        // Sign-out successful.

        console.log("Logged out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

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
  

  //handling authentication

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
                <NavLinks
                  className={
                    location.pathname === "/owner-register" ? "active" : ""
                  }
                  to="/owner-register"
                >
                  Owner Registration
                </NavLinks>
                <NavLinks
                  onClick={() => setModalState(true)}
                  className={
                    location.pathname === "/player-register" ? "active" : ""
                  }
                  to=""
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
                <Line />
                <NavLinks
                  className={
                    location.pathname === "/owner-login" ? "active" : ""
                  }
                  to="/owner-login"
                >
                  Login as Team Owner
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
          {isAuth ? (
            <NavItem>
              <NavDropDown
                onMouseEnter={() => setProfileDropDown(true)}
                onMouseLeave={() => setProfileDropDown(false)}
              >
                <Avatar imageUrl={imageUrl}></Avatar>
              </NavDropDown>
              <DropdownContent
                state={profileDropdown}
                onMouseEnter={() => setProfileDropDown(true)}
                onMouseLeave={() => setProfileDropDown(false)}
              >
                <NavLinks to="/profile-page">Profile</NavLinks>
                <NavLinks onClick={handleSignOut}>Logout</NavLinks>
                
                
              </DropdownContent>
            </NavItem>
          ) : (
            ""
          )}
        </NavMenu>
          {isAdmin ? <NavLinks to="/admin-scanner">Admin Panel</NavLinks> : ""}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
