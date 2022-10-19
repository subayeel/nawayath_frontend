import React from "react";
import { useSearchParams } from "react-router-dom";

import {
  collection,
  query,
  where,
  getDocs,
  
} from "firebase/firestore";
import {
  PaymentSuccessContainer,
  PaymentSuccessWrapper,
  SuccessCard,
  ImgWrap,
  Img,
  Button,
  SuccessText,
  BtnContainer,
  Text2,
  Row,
  Text3,
  HighlitedGreenText,
} from "./RegisterPage.elements";
import { db } from "../../config";
import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  let searchQuery = useSearchParams()[0];
  const reference = searchQuery.get("reference");

  const amount = searchQuery.get("amount");

  // async function getPlayerCount() {
  //   const collectionRef = collection(db,"playerDetails");
  //   const snapshot = await collectionRef.count().get();

  //   console.log(snapshot.data.count);
  // }
  // getPlayerCount();

  return (
    <>
      <PaymentSuccessContainer>
        <PaymentSuccessWrapper>
          <SuccessCard>
            <SuccessText>Payment Successful</SuccessText>
            <ImgWrap>
              <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/check.png?alt=media&token=5b833cd4-760d-4a16-8738-5ebdfc86d563" />
            </ImgWrap>

            <HighlitedGreenText>Email Sent!</HighlitedGreenText>

            <HighlitedGreenText>
              Please check your email for Payment reciept
            </HighlitedGreenText>

            <Row>
              <Text2>Amount Paid</Text2>
              <Text3> &#8377;{amount}</Text3>
            </Row>
            <Row>
              <Text2>Transaction Id</Text2>
              <Text3>{reference}</Text3>
            </Row>

            <BtnContainer>
              <Button to="/">Back to Homepage</Button>
            </BtnContainer>
            <Row>
              <Text3>Please take screenshot for further reference</Text3>
            </Row>
          </SuccessCard>
        </PaymentSuccessWrapper>
      </PaymentSuccessContainer>
    </>
  );
};

export default PaymentSuccess;
