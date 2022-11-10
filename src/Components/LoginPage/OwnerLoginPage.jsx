import React from "react";
import { useState } from "react";
import { authentication } from "../../config";
import { useNavigate } from "react-router-dom";
import {
  TextfieldWrap,
  
  Heading,
  LoginForm,
  BtnWrap,
  TextWrap,
  Color,
  OtpSentMessage,
  LoginButton,
  
} from "./OwnerLoginPage.elements";
import { MDBInput,} from "mdb-react-ui-kit";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect } from "react";
import {MainContainer,MainWrapper} from "../Global"

const OwnerLoginPage = () => {
  const [otpState, setOtpState] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOwnerNum, setIsOwnerNum] = useState(false);
  const navigate = useNavigate();
  const ownerNumbers = [
    "+919740730152", //admin
    "+919611950190",
    "+919738809009",
    "+919686971813",
    "+917996477891",
    "+919036360823",
    "+919972132310",
    "+919986663666",
    "+919902722823",

    "+919611767705", //admin
  ];
  //auth variables

  const handleSendOtp = (e) => {
    if (mobileNumber.toString().length === 13 && isOwnerNum) {
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
    } else {
      alert("Please enter your registered Number");
    }
  };

  useEffect(() => {
    if (ownerNumbers.includes(mobileNumber)) {
      setIsOwnerNum(true);
    } else {
      setIsOwnerNum(false);
    }
  }, [mobileNumber]);

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

  // const handleSignOut = () => {
  //   authentication
  //     .signOut()
  //     .then(() => {
  //       // Sign-out successful.

  //       console.log("Logged out");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log(error);
  //     });
  // };

  useEffect(() => {});

  return (
    <>
      <MainContainer>
        <MainWrapper>
          <LoginForm>
            <TextWrap>
              <Heading>
                <Color>Team Owner Login</Color>
              </Heading>
            </TextWrap>

            <TextfieldWrap>
              {otpState ? (
                <></>
              ) : (
                <MDBInput label="Mobile Number" onChange={handleNumber} />
              )}
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
              {otpState ? (
                <MDBInput label="Enter OTP" onChange={handleOtpChange} />
              ) : (
                               
                ""
              )}
            </TextfieldWrap>

            {/* <LoginButton radius="36px" to="/owner-register">
              Register as owner
            </LoginButton> */}
            <div id="sendOTP"></div>
          </LoginForm>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default OwnerLoginPage;
