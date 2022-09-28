import React from "react";
import { useLocation } from "react-router-dom";

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarLink,
  SidebarBtnWrap,
  SidebarMenu,
  RoundedBtn,
  LogoContainer,
} from "./Sidebar.elements";

const Sidebar = ({ isOpen, toggle }) => {
  const location = useLocation();
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <SidebarWrapper>
        <LogoContainer>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/NF%20LOGO%201.png?alt=media&token=fc8ebfb0-eb49-43e9-81e0-5ffd28c59055"
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
