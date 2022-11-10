import { MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { MainContainer, MainWrapper } from "../Global";
import {
  Heading,
  Info,
  SignupBtn,
  TextfieldContainer
} from "./Newsletter.elements";

const Newsletter = () => {
  return (
    <>
      <MainContainer>
        <MainWrapper style={{ flexDirection: "column" }}>
          <Heading>STAY IN TOUCH</Heading>
          <Info>Sign up to hear from us about specials events.</Info>

          <TextfieldContainer>
            <MDBInput label="Enter your email" />
            <SignupBtn>Sign Up</SignupBtn>
          </TextfieldContainer>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default Newsletter;
