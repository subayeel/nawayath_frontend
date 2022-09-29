import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e8e9ee;
`;
export const HeroWrapper = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  height: 320px;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border-radius: 100%;
  background-color: #1b1a55;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px;
`;

export const Heading = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: 800;
  margin: 0;
  letter-spacing: 1.1px;
  text-align: center;
`;
export const Desc = styled.p`
  color: #958da5;
  font-size: 18px;
  text-align: center;
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
