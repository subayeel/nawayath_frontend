import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  TextWrap,
  Heading,
  Desc,
  RoundedBtn,
  ButtonContainer,
} from "./Hero.elements";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <TextWrap>
            <Heading>TOGETHER WE CAN.</Heading>
            <Desc>Giving back through life-changing experiences.</Desc>

            <RoundedBtn to="/register-option">NCL-V-2022</RoundedBtn>
          </TextWrap>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
