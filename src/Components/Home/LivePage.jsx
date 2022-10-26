import React from "react";

import { MainContainer, MainWrapper } from "../Global";

import { MDBCardHeader, MDBCard, MDBContainer } from "mdb-react-ui-kit";
import { IFrame } from "./Home.elements";

const LivePage = () => {
  return (
    <>
      <MainContainer >
        
          <MDBCard className="m-2">
            <MDBCardHeader className=" fs-3 text fw-bolder">
              NCL-V Auction
            </MDBCardHeader>
            <IFrame
              className="p-3"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></IFrame>
          </MDBCard>
        
      </MainContainer>
    </>
  );
};

export default LivePage;
