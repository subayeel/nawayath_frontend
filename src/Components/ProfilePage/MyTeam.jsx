import React, { useState, useEffect } from "react";
import { MainContainer, MainWrapper } from "../Global";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../config";

import PlayerCard from "./PlayerCard";

import { MDBContainer } from "mdb-react-ui-kit";

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
      console.log("god =>>" + ownerTeamId);
    });
  }

  //getting team players
  async function getTeamPlayers() {
    console.log("gtp =>>" + ownerTeamId);
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
    return <PlayerCard playerId={props.playerId}></PlayerCard>;
  }
  return (
    <MainContainer>
      <MainWrapper>
      
        <MDBContainer>{teamPlayers.map(displayPlayerCard)}</MDBContainer>
      </MainWrapper>
    </MainContainer>
  );
};

export default MyTeam;
