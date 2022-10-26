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

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";

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
      <MDBContainer className=" mt-4">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  loading="lazy"
                  src={qrImgUrl}
                  alt="avatar"
                  className=" mb-2"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  fluid
                />
                <p className="text-muted mb-2">{name}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Team Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{teamName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Transaction Id</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {paymentId}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default OwnerProfilePage;
