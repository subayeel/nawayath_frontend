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

const RegisterCard = ({ heading, imgUrl, btnLink, btnText }) => {
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
            <Button to={btnLink}>
            {btnText}
            <FaAngleRight />
          </Button>
          </BtnContainer>
          
          </TextWrap>
        </RegisterCardWrapper>
      </RegisterCardContainer>
    </>
  );
};

export default RegisterCard;
