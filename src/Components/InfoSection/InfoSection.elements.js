import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#e8e9ee" : "#1C1A1D")};

  @media screen and (max-width: 768px) {
    padding: 28px 14px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  
  justify-content: center;
  @media screen and (max-width:768px) {
    height: 540px;
  }
 
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    (imgStart ? `'col1 col2'` : `'col2 col1'`)};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  width: 100%;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 40px;
`;

export const TopLine = styled.p`
  color: #C8902F;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ lightText }) => (lightText ? "white" : "#2F2E41")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "black" : "grey")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-self: flex-start;
  
`;

export const ImgWrap = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  justify-content: ${({imgStart})=>(imgStart===true ? 'right':'left')};
  @media screen and (max-width:768px){
    
    justify-content: center;
  }
`;

export const Img = styled.img`
  height: 300px;
  
  @media screen and (max-width:768px){
    max-height: 200px;
    justify-content: center;
  }
`;




export const Button = styled(Link)`
  border-radius: 28px;
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ primary }) => (primary ? "#1B1A55" : "#060606")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#666666" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "black" : "#2c2c2c")};
  }
`;
