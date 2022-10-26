import React from "react";
import { useState } from "react";
import { authentication } from "../../config";
import { useNavigate } from "react-router-dom";
import {
  OtpField,
  NumberField,
  TextfieldWrap,
  LoginContainer,
  LoginWrapper,
  Heading,
  LoginForm,
  BtnWrap,
  TextWrap,
  Color,
  OtpSentMessage,
  LoginButton,
  OrLineContainer,
  Line,
  OrLine,
  OrLineWrapper,
  ImgWrapper,
  Img,
} from "./OwnerLoginPage.elements";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const OwnerLoginPage = () => {
  const [otpState, setOtpState] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpValue, setOtpValue] = useState(0);
  const navigate = useNavigate();

  //auth variables

  const handleSendOtp = (e) => {
    console.log("handle called  ");

    if (mobileNumber.toString().length == 13) {
      setOtpState(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(authentication, mobileNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...

          console.log("OTP sent");
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...

          console.log(error);
        });
    }
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sendOTP",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };

  const handleNumber = (e) => {
    var phone = "+91" + e.target.value;
    setMobileNumber(phone);
  };

  const handleOtpChange = (e) => {
    var otp = e.target.value;
    
    console.log(otp);
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;

      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          navigate("/");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...

          console.log(error);
        });
    }
  };

  const handleSignOut = () => {
    authentication.signOut()
      .then(() => {
        // Sign-out successful.
        
        console.log("Logged out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          
          <LoginForm>
            <TextWrap>
              <Heading>
                <Color>Team Owner Login</Color>
              </Heading>
            </TextWrap>

            <TextfieldWrap>
              {otpState ? <></> : <NumberField onChange={handleNumber} />}
            </TextfieldWrap>

            {otpState ? (
              <></>
            ) : (
              <BtnWrap>
                <LoginButton onClick={handleSendOtp} light to="" primary>
                  Send OTP
                </LoginButton>
              </BtnWrap>
            )}

            {otpState ? (
              <OtpSentMessage to="">OTP sent to: {mobileNumber}</OtpSentMessage>
            ) : (
              ""
            )}
            <TextfieldWrap>
              {otpState ? <OtpField onChange={handleOtpChange} /> : ""}
            </TextfieldWrap>

            
            <OrLineContainer>
              <OrLineWrapper>
                <Line></Line>
                <OrLine>Not registered?</OrLine>
                <Line></Line>
              </OrLineWrapper>
            </OrLineContainer>

            <ImgWrapper>
              <Img loading="lazy"  src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/leader.png?alt=media&token=5d7bc820-ef78-4acd-b6a5-39c0f6abe304" />
            </ImgWrapper>
            <LoginButton radius="36px" to="/owner-register">
              Register as owner
            </LoginButton>
            <div id="sendOTP"></div>
          </LoginForm>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default OwnerLoginPage;
