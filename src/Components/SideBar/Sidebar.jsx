import React from "react";
import { useLocation } from "react-router-dom";

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarLink,
  SidebarBtnWrap,
  SidebarMenu,
  RoundedBtn,CloseIcon,
  LogoContainer,
} from "./Sidebar.elements";

const Sidebar = ({ isOpen, toggle }) => {
  const location = useLocation();
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
    <CloseIcon onClick={toggle}/>
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
            onClick={toggle}
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
