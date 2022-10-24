import styled from "styled-components";
import { FaAngleRight, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CenterFlexContainer } from "../Global";

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
  color: #1b1a55;
  width: 22px;
  height: 22px;
  position: absolute;

  :hover {
    color: black;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const MobileIcon = styled(CenterFlexContainer)`
  display: none;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
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

export const NavDropDown = styled.span`
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
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const DropdownContent = styled.div`
  display: ${(props) => (props.state ? "block" : "none")};
  position: absolute;
  padding-top: 7px;
  width: 240px;
  /* margin-left: ${(props) => props.lmargin}; */
  background-color: #1b1a55;
  > a {
    padding: 7px;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    right: 0;
    top: 80px;
    width: 100px;
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

export const Heading = styled.h1`
  color: #1b1a55;
  flex: 3;
  width: 100%;
  font-size: 28px;
  font-weight: 800;
  margin: 0;
  letter-spacing: 0.1px;
  text-align: center;
`;

export const Heading2 = styled.h3`
  color: #1b1a55;
  flex: 1;

  width: 100%;
  font-size: 18px;
  font-weight: 600;
  margin: 7px 0;
  letter-spacing: 0.1px;
  text-align: center;
`;

export const HighlitedText = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #970000;
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const ImgWrap = styled.div`
  height: 120px;
  width: 120px;
  margin: 14px auto;
  @media screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
  }
`;
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Text3 = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #811515;
  margin: 4px 0;
  text-align: ${({ start }) => (start ? "start" : "center")};
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ModalContent = styled.div`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    ),
    url(https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/cricket.png?alt=media&token=2307d126-3a11-40ff-afa6-23c2727ff5fe);
  background-size: contain;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;

  @media screen and (max-width:768px) {
    width: 36px;
  height: 36px;
  }
`;

export const AvatarImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

export const AvatarImg = styled.img`
  width: 120%;
`;
