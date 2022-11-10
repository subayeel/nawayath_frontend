import { MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { MainContainer, MainWrapper } from "../Global";
import {
  Heading,
  Info,
  SignupBtn,
  SignupContainer,
  TextfieldContainer,
} from "./Newsletter.elements";

const Newsletter = () => {
  return (
    <>
      <MainContainer>
        <MainWrapper>
          <Heading>STAY IN TOUCH</Heading>
          <Info>Sign up to hear from us about specials events.</Info>
          <SignupContainer>
            <TextfieldContainer>
              <MDBInput label="Enter your email" />
              <SignupBtn>Sign Up</SignupBtn>
            </TextfieldContainer>
          </SignupContainer>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default Newsletter;
