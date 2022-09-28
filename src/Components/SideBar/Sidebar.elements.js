import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


export const SidebarContainer = styled.div`
  display: grid;
  position: fixed;
  align-items: center;
  background-color: #1B1A55;
  height: 100%;
  width: 60%;
  top: 50px;
  right: 0;
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.2s ease-in-out;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  background: transparent;

  display: block;
  position: absolute;
  transform: translate(-50%, 50%);
  top: 0;
  right: 0;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  top: 0;
`;

export const LogoContainer = styled.div`
height: 120px;
width: 120px;
border-radius:100px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
>img{
  width: 95px;
}
`

export const SidebarMenu = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr;
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.0rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border-top: 1px solid white;

  &:hover {
    color: aliceblue;
  }
  &:last-child{
    border-bottom: 1px solid #ccc;
  }
`;



export const RoundedBtn = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #1b1a55;

  height: 36px;
  width: 84px;
  outline: none;
  border: none;
  border-radius: 24px;
  background-color: white;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;  
  :hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;


export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(Link)`
  padding: 10px 22px;
  background-color: #835a3a;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: burlywood;
    cursor: pointer;
  }
`;
