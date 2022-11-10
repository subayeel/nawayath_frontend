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
  
  BarsIcon,
  CloseIcon,
  Text3,
  Img,
  ImgWrap,
  ModalContent,
  HighlitedText,
  Line,
  ProfileDropdown,
} from "./Navbar.elements";

import Avatar from "./Avatar";
import { authentication } from "../../config";

import {  useLocation, useNavigate } from "react-router-dom";
import { Button } from "../RegisterPage/RegisterPage.elements";

function Navbar({ toggle, isOpen, isAuth, imageUrl, isAdmin }) {
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
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });

    setProfileDropDown(false);
  };

  // to open the rules modal
  const [modalState, setModalState] = useState(false);
  const [ownerModalState, setOwnerModalState] = useState(false);

  function openModal() {
    setModalState(true);
  }
  function closeModal() {
    setModalState(false);
  }

  function openOwnerModal() {
    setOwnerModalState(true);
  }
  function closeOwnerModal() {
    setOwnerModalState(false);
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
              <Img
                loading="lazy"
                src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/closed.png?alt=media&token=0957f6f3-a13d-4399-8d94-d69a91e51e3b"
              />
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
                  className={location.pathname === "/teams" ? "active" : ""}
                  to="teams"
                >
                  Teams
                </NavLinks>
                {/* <NavLinks
                  onClick={openOwnerModal}
                  className={
                    location.pathname === "/owner-register" ? "active" : ""
                  }
                  to=""
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
                </NavLinks> */}
                {isAuth ? (
                  ""
                ) : (
                  <>
                    <Line />
                    <NavLinks
                      className={
                        location.pathname === "/owner-login" ? "active" : ""
                      }
                      to="/owner-login"
                    >
                      Login as Team Owner
                    </NavLinks>
                  </>
                )}
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
        {isAuth ? (
          <>
            <NavDropDown
              onMouseEnter={() => setProfileDropDown(true)}
              onMouseLeave={() => setProfileDropDown(false)}
            >
              <Avatar imageUrl={imageUrl}></Avatar>
            </NavDropDown>
            <ProfileDropdown
              state={profileDropdown}
              onMouseEnter={() => setProfileDropDown(true)}
              onMouseLeave={() => setProfileDropDown(false)}
            >
              {isAdmin ? (
                <>
                  <NavLinks
                    onClick={() => {
                      setProfileDropDown(false);
                    }}
                    to="/admin-scanner"
                  >
                    Scan QR
                  </NavLinks>
                  <NavLinks
                    onClick={() => {
                      setProfileDropDown(false);
                    }}
                    to="/access-granted"
                  >
                    Guests
                  </NavLinks>
                  <NavLinks
                    onClick={() => {
                      setProfileDropDown(false);
                    }}
                    to="/auction-handler"
                  >
                    Auction Handler
                  </NavLinks>
                </>
              ) : (
                <>
                  <NavLinks
                    onClick={() => {
                      setProfileDropDown(false);
                    }}
                    to="/profile-page"
                  >
                    Profile
                  </NavLinks>
                  <NavLinks
                    onClick={() => {
                      setProfileDropDown(false);
                    }}
                    to="/my-team"
                  >
                    My Team
                  </NavLinks>
                </>
              )}

              <NavLinks onClick={handleSignOut}>Logout</NavLinks>
            </ProfileDropdown>
          </>
        ) : (
          <NavLinks
            className={location.pathname === "/owner-login" ? "active" : ""}
            to="/owner-login"
          >
            LOGIN
          </NavLinks>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
