import React from "react";
import {
  RegisterOptionContainer,
  RegisterOptionWrapper,
  Line,
  Heading,
  HeadingContainer,CardContainer
} from "./RegisterPage.elements";
import {
  playerRegister,
  ownerRegister,
  volunteerRegister,
} from "../../Data/registerOptionData";
import RegisterCard from "../RegisterPage/RegisterCard";
const RegisterOptionPage = () => {
  return (
    <>
      <RegisterOptionContainer>
        <RegisterOptionWrapper>
          <HeadingContainer>
            <Line></Line>
            <Heading>NCL-V-2022</Heading>
            <Line></Line>
          </HeadingContainer>
          <CardContainer>
            <RegisterCard {...playerRegister} />
            <RegisterCard {...ownerRegister} />
            <RegisterCard {...volunteerRegister} />
          </CardContainer>
        </RegisterOptionWrapper>
      </RegisterOptionContainer>
    </>
  );
};

export default RegisterOptionPage;
