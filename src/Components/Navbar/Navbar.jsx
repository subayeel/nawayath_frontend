import React, { useState } from "react";
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
  Text,
  AngleIcon,
  DropDownItem,
  BarsIcon,
  CloseIcon,
} from "./Navbar.elements";

import { useLocation, useNavigate } from "react-router-dom";

function Navbar({ toggle, isOpen }) {
  const navigate = useNavigate();
  const [isHome, setHome] = useState(true);
  const [rDropState, setRDropState] = useState(false);
  const [subMenuState, setSubMenu] = useState(false);
  const location = useLocation();

  function handleClick() {
    setHome(!isHome);
  }
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          {isOpen ? <CloseIcon /> : <BarsIcon />}
        </MobileIcon>
        <NavLogo to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/NF%20LOGO%201.png?alt=media&token=1545fb2d-6bbb-4e2f-8eb0-1b7ec1069819"
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
                  Owner Registeration
                </NavLinks>
                <NavLinks
                  className={
                    location.pathname === "/player-register" ? "active" : ""
                  }
                  to="/player-register"
                >
                  Player Registeration
                </NavLinks>
                <NavLinks
                  className={
                    location.pathname === "/volunteer-register" ? "active" : ""
                  }
                  to="/volunteer-register"
                >
                  Volunteer Registeration
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
