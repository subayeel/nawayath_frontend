import React from "react";
import {
  MemberCardContainer,
  MemberCardWrapper,
  ImgWrap,
  Img,
  TextWrap,
  Heading,
  Date,CardHeading,
  Subtitle,Position
} from "./OurTeam.elements";

function MemberCard({ imgsrc, heading, position, desc }) {
  return (
    <>
      <MemberCardContainer>
        <MemberCardWrapper>
          <ImgWrap>
            <Img src={imgsrc}></Img>
          </ImgWrap>
          <TextWrap>
            <CardHeading>{heading}</CardHeading>
            <Position>{position}</Position>
            <Subtitle>{desc}</Subtitle>
          </TextWrap>
        </MemberCardWrapper>
      </MemberCardContainer>
    </>
  );
}

export default MemberCard;
