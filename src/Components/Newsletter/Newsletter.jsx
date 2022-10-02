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
              <TextField />
              <label htmlFor="username" data-title="Email Address"></label>
              <SignupBtn>Sign Up</SignupBtn>
            </TextfieldContainer>
          </SignupContainer>
        </NewsletterWrapper>
      </NewsletterContainer>
    </>
  );
};

export default Newsletter;
