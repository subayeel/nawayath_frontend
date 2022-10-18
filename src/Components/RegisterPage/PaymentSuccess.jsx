import React from "react";
import { useSearchParams } from "react-router-dom";

import { collection, query, where, getDocs } from "firebase/firestore";
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
} from "./RegisterPage.elements";
import { db } from "../../config";
import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  let searchQuery = useSearchParams()[0];
  const reference = searchQuery.get("reference");

  const amount = searchQuery.get("amount");

  async function getPlayerDetails() {
    const playerDetailsRef = collection(db, "playerDetails");
    const q = query(
      playerDetailsRef,
      where("razorpay_payment_id", "==", reference)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var name =
        doc.data().firstName +
        " " +
        doc.data().middleName +
        " " +
        doc.data().lastName;
      setName(name);
      setPhone(doc.data().mobileNumber);
    });
  }
  useEffect(async () => {
    getPlayerDetails();
  }, []);
  console.log(phone);

  return (
    <>
      <PaymentSuccessContainer>
        <PaymentSuccessWrapper>
          <SuccessCard>
            <SuccessText>Payment Successful</SuccessText>
            <ImgWrap>
              <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/check.png?alt=media&token=5b833cd4-760d-4a16-8738-5ebdfc86d563" />
            </ImgWrap>

            <Row>
              <Text2>Name</Text2>
              <Text3>{name}</Text3>
            </Row>
            <Row>
              <Text2>Phone</Text2>
              <Text3>{phone}</Text3>
            </Row>
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
