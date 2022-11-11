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
import { SMDBCard } from "../ProfilePage/OwnerProfilePage.elements";
import { useNavigate, Link, useParams } from "react-router-dom";

import { days } from "../../Data/days";

const DayPage = () => {
  const navigate = useNavigate();
  const { day } = useParams();
  const dayObj = days[parseInt(day[3]) - 1];

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
                <MDBBtn
                    className="mt-2"
                    onClick={() => {
                      navigate(props.btnLink);
                    }}
                    disabled
                  >
                    Upcoming 
                  </MDBBtn>
              )}
              {/* <MDBBtn className="mt-2" onClick={()=>{navigate(props.playingRoute)}}>Playing-11</MDBBtn> */}
            </MDBContainer>
          </MDBCardBody>
        </SMDBCard>
      </MDBCol>
    );
  };

  return (
    <MainContainer>
      <MDBRow className="mt-4">
        <MDBCol>
          <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
            <MDBBreadcrumbItem>
              <Link to="/">Home</Link>
            </MDBBreadcrumbItem>

            <MDBBreadcrumbItem>
              <Link to="/live-page">All Days</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>{day}</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>
      <MDBCard className="m-2">
        <MDBCardHeader className=" fs-3 text fw-bolder">
          Day-{day[3]} 
        </MDBCardHeader>
        {dayObj.liveLink === "" ? (
          ""
        ) : (
          <IFrame
            className="p-3"
            src={dayObj.liveLink}
            allow="fullscreen;"
          ></IFrame>
          
        )}
      </MDBCard>
      <MDBRow>{days.map(createDaysCard)}</MDBRow>
    </MainContainer>
  );
};

export default DayPage;
