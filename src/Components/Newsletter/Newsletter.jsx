import { MDBInput } from "mdb-react-ui-kit";
import React from "react";
import {
  NewsletterContainer,
  NewsletterWrapper,
  Heading,
  Info,
  TextField,
  SignupBtn,
  SignupContainer,
  TextfieldContainer,
} from "./Newsletter.elements";

const Newsletter = () => {
  return (
    <>
      <NewsletterContainer>
        <NewsletterWrapper>
          <Heading>STAY IN TOUCH</Heading>
          <Info>Sign up to hear from us about specials events.</Info>
          <SignupContainer>
            <TextfieldContainer>
              <MDBInput label="Enter your email"/>
              <SignupBtn>Sign Up</SignupBtn>
            </TextfieldContainer>
          </SignupContainer>
        </NewsletterWrapper>
      </NewsletterContainer>
    </>
  );
};

export default Newsletter;
