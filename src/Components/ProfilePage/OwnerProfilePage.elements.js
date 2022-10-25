import styled from "styled-components";
import { CenterFlexContainer } from "../Global";
import { QrReader } from "react-qr-scanner";

export const ProfilePageContainer = styled.div`
  max-width: 1140px;

  margin: auto;
`;


export const ProfilePageWrapper = styled(CenterFlexContainer)`
  height: 80vh;
`;
export const ProfileCard = styled(CenterFlexContainer)`
  border: 1px solid #ccc;
  width: 100%;

  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const QrCodeContainer = styled.div`
  height: 200px;
  width: 200px;
`;

export const DetailsContainer = styled(CenterFlexContainer)`
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin: 7px 0;
  justify-content: space-between;
`;
export const Text2 = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: $ccc;
  margin: 0 14px;
`;
export const Text3 = styled.p`
  font-size: 18 px;
  color: black;
  margin: 0;
  text-align: ${({ start }) => (start ? "start" : "center")};
`;

export const ImgWrapper = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
`;
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const SquareButton = styled.button`
  padding: 7px 14px;
  color: ${(props)=>props.primary?"white":"#1b1a55"};;
  background-color: ${(props)=>props.primary?"#1b1a55":"#fff"};
  border-radius: 4px;
  width: 80%;
  margin: 14px 7px;
  border: ${(props)=>props.primary?"none":"2px solid #1b1a55"};
  &:hover {
    background-color: black;
    color:#fff;
    cursor: pointer;
    border: ${(props)=>props.primary?"none":"2px solid black"};
  }

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;