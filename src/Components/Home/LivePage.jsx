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
            NCL-V 
          </MDBCardHeader>
          <IFrame
            className="p-3"
            src="https://www.youtube.com/embed/O-jCdziXTO0"
          ></IFrame>
        </MDBCard>
      </MainContainer>
    </>
  );
};

export default LivePage;
