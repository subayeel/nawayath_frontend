import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  
`;

export const LoginWrapper = styled.div`
  display: flex;

  min-height: 400px;
  width: 300px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  padding: 28px;
  background-color: white;
  &:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

  padding: 0 24px;

  @media screen and (max-width:768px){
    width: 240px;
  }
`;

export const Heading = styled.p`
  display: block;
  font-size: 24px;
  margin: 0;
  
  
  font-weight: 600;
  font-family: Segoe UI;
  line-height: 28px;
  color: #2c2c2c;
  font-weight: 600;
`;

export const BottomLine = styled.p`
  display: block;
  font-size: 18px;
  margin: 0;
  color: #666666;
  font-weight: 400;
`;
export const LoginForm = styled.form`
  width: 100%;
`;

export const TextfieldWrap = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
`;
export const NumberField = styled.input.attrs({
  type: "text",
  placeholder: "Enter Mobile number",
})`
  cursor: pointer;

  color: #707070;
  width: 100%;
  height: 36px;
  border: none;
  
  outline: none;
  margin: 7px 0;
  padding:0 10px;
  box-shadow: 0px 0px 3px;
  
  transition: 0.15s;

  display: block;

  @media (max-width: 900px) {
    width: 280px;
    height: 40px;
  }
`;

export const OtpField = styled.input.attrs({
  type: "text",
  placeholder: "OTP",
})`
  cursor: pointer;

  color: #707070;
  width: 100%;
  height: 36px;
  border: none;
  margin: 7px 0;
  padding:0 10px;
  outline: none;

  box-shadow: 0px 0px 3px;
  
  transition: 0.15s;

  display: block;

  @media (max-width: 900px) {
    width: 280px;
    height: 40px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 14px 0;
`;
export const TextWrap = styled.div`
  justify-content: start;
  margin: 20px 0;
`;
export const OrLineContainer = styled.div`
  height: 40px;
`;

export const OrLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Line = styled.hr`
  
  color: #eee;
  background-color: #eee; 
  margin: 0;
  width:25%;
  @media screen and (max-width:768px){
    display:none;
    content: "Haven't registered?";
  }
`;

export const OrLine = styled.p`
  font-weight: 500px;
  font-size: 16px;
  margin: 5px;
  color: #2c2c2c;
`;

export const OtpSentMessage = styled.p`
  font-size: 14px;
  text-decoration-line: none;
  color: #3c7c90;
  
  margin: 4px 0;
 
`;
export const Color = styled.p`
  margin: 0;
  color: #1B1A55;
`;



export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ShareText = styled.p`
  flex: 3;
  font-size: 16px;
  margin: 0;
  font-weight: 500;
  text-align: center;
`;





export const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 16px;
  margin: 0;
  font-weight: 400;
  text-align: center;
  background-color: #1B1A55;
  color: #eeeeee;
  border-radius: ${(props)=>props.radius};
  height:36px;
  width:100%;
  &:hover{
    background-color: black;
  }
`;

export const ImgWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin:14px 0;
`;
export const Img = styled.img`
  width: 30%;
  object-fit: fill;
`;