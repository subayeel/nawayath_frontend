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
  MDBCardSubTitle,
} from "mdb-react-ui-kit";
import { teams } from "../../Data/teams";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, MainWrapper } from "../Global";
import { SMDBCard } from "./OwnerProfilePage.elements";

const Teams = () => {
  const navigate = useNavigate();
  const createTeamCard = (props) => {
    return (
      
        <MDBCol lg="4" md="6">
          <SMDBCard
            onClick={() => {
              navigate(props.onClickRoute);
            }}
            className="mb-4"
          >
            <MDBCardBody className="text-center">
              <MDBCardImage
                loading="lazy"
                src={props.imgUrl}
                alt="avatar"
                className="rounded-circle mb-2"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
                fluid
              />
              <MDBCardSubTitle>{props.teamName}</MDBCardSubTitle>
            </MDBCardBody>
          </SMDBCard>
        </MDBCol>
      
    );
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow className="mt-2">
        <MDBCol>
          <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
            <MDBBreadcrumbItem>
              <Link to="/">Home</Link>
            </MDBBreadcrumbItem>

            <MDBBreadcrumbItem active>All Teams</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>
      <MDBRow>{teams.map(createTeamCard)}</MDBRow>
    </MDBContainer>
  );
};

export default Teams;
