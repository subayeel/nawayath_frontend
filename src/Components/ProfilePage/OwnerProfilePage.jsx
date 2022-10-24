import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

import {
  ProfilePageContainer,
  StyledQrReader,
  ProfilePageWrapper,
  QrCodeContainer,
  Row,
  Text2,
  Text3,
  DetailsContainer,
  ImgWrapper,
  Img,
  ProfileCard,
} from "./OwnerProfilePage.elements";

//firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config";

const OwnerProfilePage = ({ phone, name, teamName, paymentId }) => {
  const [qrImgUrl, setQrUrl] = useState("");
  


  // console.log(phone)

  // setName(doc.data().ownerFullName);
  // setTeamName(doc.data().teamName);
  // setPaymentId(doc.data().razorpay_payment_id);
  const generateQrCode = async () => {
    // console.log(name + teamName + paymentId);
    // console.log(phone)
    try {
      const response = await QRCode.toDataURL(
        JSON.stringify({
          contactNumber: phone,
          name: name,
          teamName: teamName,
          paymentId: paymentId,
        })
      );
      setQrUrl(response);
    } catch {}
  };

  useEffect(() => {
    // getOwndetails();
    generateQrCode();
  }, [name]);

 

 

  return (
    <>
      <ProfilePageContainer>
        <ProfilePageWrapper>
          <ProfileCard>
            

            <ImgWrapper>
              <Img src={qrImgUrl} />
            </ImgWrapper>

            <DetailsContainer>
              <Row>
                <Text2>Name</Text2>
                <Text3> {name}</Text3>
              </Row>
              <Row>
                <Text2>Phone Number</Text2>
                <Text3>{phone}</Text3>
              </Row>
              <Row>
                <Text2>Team Name</Text2>
                <Text3>{teamName}</Text3>
              </Row>
              <Row>
                <Text2>Transaction ID</Text2>
                <Text3>{paymentId}</Text3>
              </Row>
            </DetailsContainer>
          </ProfileCard>
        </ProfilePageWrapper>
      </ProfilePageContainer>
    </>
  );
};

export default OwnerProfilePage;
