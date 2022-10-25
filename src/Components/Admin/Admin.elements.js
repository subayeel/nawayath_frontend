import styled from "styled-components";
import Modal from "react-modal";
import { FaTimes,FaQrcode } from "react-icons/fa";
import { CenterFlexContainer, TableRow } from "../Global";

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
export const Label = styled.label`
  width: 100%;
  color: #2c2c2c;
  font-size: 14px;
  font-weight: 600;
  margin-right: 24px;
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

export const QRCodeIcon = styled(FaQrcode)`
  color: #1b1a55;
  width: 32px;
  height: 32px;
  margin-left: 14px;
  
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
  font-size: 22px;
  color: #1B1A55;
  text-align: center;
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

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
export const Text4 = styled.p`
  font-size: 18 px;
  color: black;
  margin: 0;
  text-align: ${({ start }) => (start ? "start" : "center")};
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
flex-direction: column;
`;
export const SelectField = styled.select`
  width: 100%;

  padding: 12px 14px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline-color: #1b1a55;
  }
`;

export const Column = styled(CenterFlexContainer)`
width: 100%;
flex-direction: column;
`
export const SubRow = styled(TableRow)`
padding-left: 14px;
`
export const InputField = styled.input`
  width: 100%;

  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline-color: #1b1a55;
  }
`;

