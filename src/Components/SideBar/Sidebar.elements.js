import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  display: grid;
  position: fixed;
  align-items: center;
  background-color: #161616;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.2s ease-in-out;
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  height: 28px;
  width: 28px;
  color: #e8e9ee;
  top: 0;
  right: 0;
  padding: 14px;
  transition: 0.2s;
  &:hover {
    color: #ccc;
    cursor: pointer;
  }
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
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 auto;
  > img {
    width: 95px;
  }
`;

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
  color: #e8e9ee;
  align-items: center;
  justify-content: start;
  text-align: center;
  margin: 0 14px;
  letter-spacing: 1px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s;
  cursor: pointer;
  border-top: 1px solid #666666;

  &:hover {
    color: #ccc;
  }
  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: 1px solid #666666;
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
