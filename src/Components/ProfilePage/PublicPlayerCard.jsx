import React, { useState, useEffect } from "react";
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

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config";

import { SquareButton, PlayerCardWrapper } from "./OwnerProfilePage.elements";
import { FaArrowRight } from "react-icons/fa";

const PublicPlayerCard = ({ playerId, biddingPoints,teamName }) => {
  const [playerDetails, setPlayerDetails] = useState([]);
  const [fullName, setName] = useState();
  async function getPlayerDetails() {
    const q = query(
      collection(db, "auctionPlayers"),
      where("_id", "==", parseInt(playerId))
    );
    let arr = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setPlayerDetails(doc.data());
    });
  }

  const getFullName = () => {
    if (
      playerDetails.lastName === undefined &&
      playerDetails.firstName === undefined
    ) {
      setName(playerDetails.middleName);
    } else if (
      playerDetails.firstName === undefined &&
      playerDetails.middleName === undefined
    ) {
      setName(playerDetails.lastName);
    } else if (
      playerDetails.lastName === undefined &&
      playerDetails.middleName === undefined
    ) {
      setName(playerDetails.firstName);
    } else if (playerDetails.firstName === undefined) {
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

  useEffect(() => {
    getPlayerDetails();
  }, []);
  return (
    <MDBCard className="mb-4">
      <PlayerCardWrapper>
        {/* <p className="text-muted mb-1 my-1">{playerId}</p> */}
        <p className="text mb-1 my-1">{fullName}</p>
        <p className="text-muted mb-1 my-1">{biddingPoints}</p>

        
      </PlayerCardWrapper>
    </MDBCard>
  );
};

export default PublicPlayerCard;
