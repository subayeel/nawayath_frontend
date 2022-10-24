import React from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  Heading2,
  RegisterCardContainer,
  RegisterCardWrapper,
  ImgWrapper,
  Img,
  Button,
  TextWrap,
  BtnContainer,
} from "./RegisterPage.elements";

const RegisterCard = ({
  heading,
  imgUrl,
  registerBtnLink,
  btnText,
  btnDisabled,
  setModalState,
  loginBtn,
  loginBtnText,
  loginBtnLink
}) => {
  return (
    <>
      <RegisterCardContainer>
        <RegisterCardWrapper>
          <ImgWrapper>
            <Img src={imgUrl} />
          </ImgWrapper>
          <TextWrap>
            <Heading2>{heading}</Heading2>
            <BtnContainer>
              <Button to={registerBtnLink} onClick={btnDisabled ? () => setModalState(true) : ""}>
                {btnText}
                <FaAngleRight />
              </Button>
            </BtnContainer>
            {loginBtn ? (
              <BtnContainer>
                <Button to={loginBtnLink} onClick={btnDisabled ? () => setModalState(true) : ""}>
                  {loginBtnText}
                  <FaAngleRight />
                </Button>
              </BtnContainer>
            ) : (
              ""
            )}
            <p></p>
          </TextWrap>
        </RegisterCardWrapper>
      </RegisterCardContainer>
    </>
  );
};

export default RegisterCard;
