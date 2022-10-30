import React, { useState, useEffect } from "react";
import { MainContainer, MainWrapper } from "../Global";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config";
import { useParams } from "react-router-dom";

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

const TeamPage = () => {
  const { team } = useParams();

  const [teamPlayers, setTeamPlayers] = useState([]);

  function displayPlayerCard(props) {
    return (
      <PlayerCard
        teamName={team}
        biddingPoints={props.biddingPoints}
        playerId={props.playerId}
      ></PlayerCard>
    );
  }

  //getting team players
  async function getTeamPlayers() {
    let arr = [];
    const querySnapshot = await getDocs(collection(db, team));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      arr = [...arr, doc.data()];
      setTeamPlayers(arr);
    });
  }

  useEffect(() => {
    getTeamPlayers();
  }, [team]);

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

            <MDBBreadcrumbItem active>{team}</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>
      <MainWrapper style={{ flexDirection: "column" }}>
        

        <MDBCardHeader className="text-md-start">{team}</MDBCardHeader>
        <MDBContainer>{teamPlayers.map(displayPlayerCard)}</MDBContainer>
      </MainWrapper>
    </MainContainer>
  );
};

export default TeamPage;
