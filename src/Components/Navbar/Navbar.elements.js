import styled from "styled-components";
import { FaAngleRight, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: sticky;
  top: 0;

  background-color: #1b1a55;
  height: 80px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    transition: 0.6s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex: 1;
  height: 80px;
  max-width: 1140px;

  justify-content: space-between;
  padding: 0 24px;
`;

export const NavLogo = styled(Link)`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  overflow: hidden;
  img {
    height: 80px;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
    img {
      height: 80px;
    }
  }
`;

export const BarsIcon = styled(FaBars)`
  color: white;
  &:hover {
    color: #ccc;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
  &:hover {
    color: #ccc;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);

    left: 0;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  padding: 0;
  align-items: center;
  text-align: center;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 50px;
`;

export const NavLinks = styled(Link)`
  display: flex;
  color: #fff;
  text-decoration: none;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: ${(props) => props.state};
  &:hover {
    color: #ccc;
  }
`;

export const NavDropDown = styled.p`
  display: flex;
  justify-content: space-around;
  color: #fff;
  text-decoration: none;
  align-items: center;
  margin: 0;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: ${(props) => props.state};
  background-color: #1b1a55;

  &:hover {
    color: #ccc;
  }
`;
export const DropdownContent = styled.div`
  display: ${(props) => (props.state ? "block" : "none")};
  position: absolute;
  padding-top: 7px;
  width: 240px;
  /* margin-left: ${(props) => props.lmargin}; */
  background-color: #1b1a55;
  > a{
    padding: 7px;
    &:hover{
      background-color: black;
      color: white;
    }
  }
  
`;

export const DropDownItem = styled.div`
  width: 100%;
  background-color: #1b1a55;
  &:hover {
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AngleIcon = styled(FaAngleRight)`
  color: #fff;
`;

export const NavBtnLink = styled(Link)`
  white-space: nowrap;
  border: 2px solid #835a3a;
  background: transparent;
  padding: 5px 22px;
  outline: none;
  color: #835a3a;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in;
    color: #fff;
    background-color: #835a3a;
  }
`;

export const DropLinks = styled.div`
  position: absolute;
  min-width: 50px;
  display: ${(props) => (props.state ? "block" : "none")};
`;
export const DropBtn = styled.button`
  display: flex;
  color: #1b1a55;
  text-decoration: none;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: ${(props) => props.state};
  &:hover {
    color: #625e8a;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  text-align: start;
  margin: 7px;
  color: #fff;
  &:hover {
    color: #ccc;
  }
`;
export const Line = styled.hr`
  color: #1b1a55;
  margin: 0;
`;