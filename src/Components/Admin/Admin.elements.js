import styled from "styled-components";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { CenterFlexContainer } from "../Global";

export const StyledModal = styled(Modal)`
  height: 360px;
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background-color: #eee;

  @media screen and (max-width: 768px) {
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #1b1a55;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 2%;
  top: 5%;
  :hover {
    color: black;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const ImgWrap = styled.div`
  height: 100px;
  width: 100px;
  margin: 14px auto;
  @media screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const ModalContent = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
`;

export const HighlitedText = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #970000;
  text-align: center;
  justify-content: center;
  display: flex;
`;

export const Text3 = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: green;
  margin: 4px 0;
  text-align: ${({ start }) => (start ? "start" : "center")};
`;

export const ScannerContainer = styled(CenterFlexContainer)`
margin: 14px 28px;
`