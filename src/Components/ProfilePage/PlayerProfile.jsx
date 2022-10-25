import React, { useState } from "react";
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
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config";
import { useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { SquareButton } from "./OwnerProfilePage.elements";

export default function PlayerProfile() {
  const { id } = useParams();

  const [fullName, setName] = useState();
  const [playerDetails, setPlayerDetails] = useState({
    dob: "",
    educationInstitute: "",
    firstName: "",
    lastName: "",
    middleName: "",
    mobileNumber: "",
    nativeLoc: "",
    nawayathResidentBanglore: "",
    occupation: "",
    playedNcl1: "",
    playedNcl2: "",
    playedNcl3: "",
    playedNcl4: "",
    playedNclBefore: "",
    playerImageUrl: "",
    playerRole: "",
    razorpay_payment_id: "",
    shirtSize: "",
    sportsClub: "",
    trouserSize: "",
  });

  async function getPlayerDetails() {
    const q = query(
      collection(db, "auctionPlayers"),
      where("_id", "==", parseInt(id))
    );
    let arr = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setPlayerDetails(doc.data());
      console.log(playerDetails);
    });
  }

  useEffect(() => {
    getPlayerDetails();
  }, []);

  const getFullName = () => {
    if (playerDetails.firstName === undefined) {
      setName(playerDetails.middleName + " " + playerDetails.lastName);
    } else if (playerDetails.middleName === undefined) {
      setName(playerDetails.firstName + " " + playerDetails.lastName);
    } else if (playerDetails.lastName === undefined) {
      setName(playerDetails.firstName + " " + playerDetails.middleName);
    } else {
      setName(
        playerDetails.firstName +
          " " +
          playerDetails.middleName +
          " " +
          playerDetails.lastName
      );
    }
  };

  useEffect(() => {
    getFullName();
  }, [playerDetails]);
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href="#">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">
                  {fullName}
                </p>
                <p className="text-muted mb-4">{playerDetails.sportsClub}</p>
                <div className="d-flex justify-content-center mb-2">
                  <SquareButton primary>Call</SquareButton>
                  <SquareButton>Message</SquareButton>
                  
                </div>
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
                    <MDBCardText className="text-muted">
                    {fullName}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Birth</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{playerDetails.dob}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Player Role</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {playerDetails.playerRole}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Native Location</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{playerDetails.nativeLoc}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{playerDetails.mobileNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Education Institute</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {playerDetails.educationInstitute}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Sports Club</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {playerDetails.sportsClub}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Shirt Size</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{playerDetails.shirtSize}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Trouser Size</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{playerDetails.trouserSize}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
