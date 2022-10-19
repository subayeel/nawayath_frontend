import React from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  Heading2,
  RegisterCardContainer,
  RegisterCardWrapper,
  ImgWrapper,
  Img,
  Button,TextWrap,BtnContainer
} from "./RegisterPage.elements";

const RegisterCard = ({ heading, imgUrl, btnLink, btnText, btnDisabled,setModalState }) => {
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
            <Button onClick={btnDisabled?()=>setModalState(true):""}  >
            {btnText}
            <FaAngleRight />
          </Button>
          </BtnContainer>
          
          <p></p>
          </TextWrap>
        </RegisterCardWrapper>
      </RegisterCardContainer>
    </>
  );
};

export default RegisterCard;
