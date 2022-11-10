import React from "react";

import { MainContainer } from "../Global";

import {
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardSubTitle,
  MDBBtn,
  MDBRow,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import { IFrame } from "./Home.elements";
import { useNavigate, Link } from "react-router-dom";

import { SMDBCard } from "../ProfilePage/OwnerProfilePage.elements";
import { days } from "../../Data/days";

const LivePage = () => {
  const navigate = useNavigate();

  const createDaysCard = (props) => {
    return (
      <MDBCol lg="4" md="6">
        <SMDBCard className="mb-4">
          <MDBCardBody className="text-center">
            <MDBCardImage
              loading="lazy"
              src={props.imgUrl}
              alt="avatar"
              className=" mb-2"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
              }}
              fluid
            />
            <MDBCardSubTitle>{props.text}</MDBCardSubTitle>
            <MDBContainer>
              {props.status ? (
                <>
                  <MDBBtn
                    className="mt-2"
                    onClick={() => {
                      navigate(props.btnLink);
                    }}
                  >
                    Watch
                  </MDBBtn>
                </>
              ) : (
                <>
                  <MDBBtn className="mt-2" disabled>
                    Upcoming
                  </MDBBtn>
                </>
              )}
              {/* <MDBBtn className="mt-2" onClick={()=>{navigate(props.playingRoute)}}>Playing-11</MDBBtn> */}
            </MDBContainer>
          </MDBCardBody>
        </SMDBCard>
      </MDBCol>
    );
  };
  return (
    <>
      <MainContainer>
        <MDBRow className="mt-2">
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to="/">Home</Link>
              </MDBBreadcrumbItem>

              <MDBBreadcrumbItem active>All Days</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>{days.map(createDaysCard)}</MDBRow>
      </MainContainer>
    </>
  );
};

export default LivePage;
