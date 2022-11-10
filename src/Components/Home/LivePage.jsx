import React from "react";

import { MainContainer,  } from "../Global";

import { MDBCardHeader, MDBCard } from "mdb-react-ui-kit";
import { IFrame } from "./Home.elements";

const LivePage = () => {
  return (
    <>
      <MainContainer>
        <MDBCard className="m-2">
          <MDBCardHeader className=" fs-3 text fw-bolder">
            Day-1: Bangalore Challenger vs Sewn11
          </MDBCardHeader>
          <IFrame
            className="p-3"
            src="https://www.youtube.com/embed/O-jCdziXTO0"
            allow="fullscreen;"
          ></IFrame>
        </MDBCard>
      </MainContainer>
    </>
  );
};

export default LivePage;
