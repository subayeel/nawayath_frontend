import React, { useState } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../config";

import { MainContainer, MainWrapper } from "../Global";
import { MDBInput, MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { SelectField } from "./Admin.elements";

import { useEffect } from "react";

const AuctionHandler = () => {
  const [playerId, setPlayerId] = useState();
  const [name, setName] = useState();
  const [teamName, setTeamName] = useState();
  const [bid, setBid] = useState();

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

  const handlePlayerId = (e) => {
    console.log(e.target.value);
    setPlayerId(e.target.value);
  };

  const handleTeamName = (e) => {
    setTeamName(e.target.value);
  };

  const handleBiddingPoint = (e) => {
    setBid(e.target.value);
  };

  const handleFormSubmit= (e)=>{
    e.preventDefault()
  }

  async function getPlayerDetails() {
    const q = query(
      collection(db, "auctionPlayers"),
      where("_id", "==", parseInt(playerId))
    );

    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);

    querySnapshot.forEach((doc) => {
      setPlayerDetails(doc.data());
      console.log(playerDetails);
    });
  }

  

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

  const handleSold = async () => {
    try {
      const docRef = await addDoc(collection(db, teamName), {
        playerId: playerId,
        biddingPoints: bid,
      });
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("playerId").value=""
      document.getElementById("playerName").value=""
      document.getElementById("clubName").value=""
      document.getElementById("bid").value=""
      document.getElementById("teamName").value="Sold to"
    } catch (error) {
      console.log("UNSUCCESSFULL: " + error);
    }
  };

  useEffect(() => {
    getFullName();
  }, [playerDetails]);

  return (
    <>
      <MainContainer>
        <MainWrapper>
        <form onSubmit={handleFormSubmit}>
          <MDBContainer className="mt-4 ">
            <div className="mt-2 ">
              <MDBInput
                id="playerId"
                label="Enter player Id"
                onChange={handlePlayerId}
                required
              />
              <MDBBtn className="my-2" color="dark" onClick={getPlayerDetails}>
                Get Player
              </MDBBtn>
            </div>
           

            <MDBInput
              id="playerName"
              className="mt-2"
              readOnly
              label="Player Name"
              value={name}
            ></MDBInput>
            <MDBInput
              id="clubName"
              className="mt-2"
              readOnly
              label="Sports Club"
              value={playerDetails.sportsClub}
            ></MDBInput>
            <hr />
            <MDBInput
              id="bid"
              className="mt-4"
              label="Bidding Point"
              onChange={handleBiddingPoint}
              required
            ></MDBInput>

            <SelectField id="teamName" onChange={handleTeamName} required>
              <option disabled selected>
                Sold to
              </option>
              <option value="dvsUnited">DVS United</option>
              <option value="penthouseUnited">Penthouse United</option>
              <option value="mankiChargers">Manki Chargers</option>
              <option value="nawayathBulls">Nawayath Bulls</option>
              <option value="bangaloreChallengers">
                Bangalore Challengers
              </option>
              <option value="rasbaharChallengers">Rasbahar Challengers</option>
              <option value="sewn11">Sewn 11</option>
              <option value="azaad">Azaad</option>
            </SelectField>
            <MDBBtn color="success" onClick={handleSold}>
              Sold
            </MDBBtn>
          </MDBContainer>
          </form>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default AuctionHandler;
