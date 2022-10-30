import React, { useState, useEffect } from "react";
import { MainContainer, MainWrapper } from "../Global";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../config";

import PlayerCard from "./PlayerCard";
import { Link } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardHeader,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";



const MyTeam = ({ phone }) => {
  
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [ownerTeamId, setOwnerTeamId] = useState();

  //getting team owner
  async function getOwnerdetails() {
    const q = query(
      collection(db, "ownerDetails"),
      where("ownerContactNumber", "==", phone.slice(3))
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setOwnerTeamId(doc.data().teamId);
    });
  }

  //getting team players
  async function getTeamPlayers() {
    let arr = [];
    const querySnapshot = await getDocs(collection(db, ownerTeamId));
    querySnapshot.forEach((doc) => {
      arr = [...arr, doc.data()];
      setTeamPlayers(arr);
      console.log(arr);
    });
  }

  useEffect(() => {
    getOwnerdetails();
    getTeamPlayers();
  }, [phone, ownerTeamId]);

  function displayPlayerCard(props) {
    return (
      <PlayerCard
        teamName={ownerTeamId}
        biddingPoints={props.biddingPoints}
        playerId={props.playerId}
      ></PlayerCard>
    );
  }
  return (
    <MainContainer className="py-5">
    <MDBRow className="mt-2">
        <MDBCol>
          <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
            <MDBBreadcrumbItem>
              <Link to="/">Home</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link to={"/teams"}>All teams</Link>
            </MDBBreadcrumbItem>

            <MDBBreadcrumbItem active>{ownerTeamId}</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>
      <MainWrapper style={{ flexDirection: "column" }}>

        <MDBContainer>{teamPlayers.map(displayPlayerCard)}</MDBContainer>
      </MainWrapper>
    </MainContainer>
  );
};

export default MyTeam;
