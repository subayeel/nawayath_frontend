import React, { useState } from "react";
import Modal from "react-modal";
import {
  RegisterOptionContainer,
  RegisterOptionWrapper,
  Line,
  Heading,
  HeadingContainer,
  CardContainer,
  CloseIcon,
  Text3,
  Img,
  ImgWrap,
  ModalContent,
  HighlitedText,
  Button,Text4
} from "./RegisterPage.elements";
import {
  playerRegister,
  ownerRegister,
  volunteerRegister,
} from "../../Data/registerOptionData";
import RegisterCard from "../RegisterPage/RegisterCard";
const RegisterOptionPage = () => {
  // to open the rules modal
  const [modalState, setModalState] = useState(false);
  function openModal() {
    setModalState(true);
  }
  function closeModal() {
    setModalState(false);
  }
  const customStyles = {
    content: {
      width: "40%",
      height: "40%",
      position: "absolute",
      overflow: "hidden",
      left: "50%",
      top: "55%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <RegisterOptionContainer>
        <Modal
          style={customStyles}
          onRequestClose={closeModal}
          handleState={setModalState}
          isOpen={modalState}
        >
          <ModalContent>
            <CloseIcon onClick={closeModal} />

            <ImgWrap>
              <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/closed.png?alt=media&token=0957f6f3-a13d-4399-8d94-d69a91e51e3b" />
            </ImgWrap>
            <Text4>Player Registration has been Closed!</Text4>
            <HighlitedText>
              <Button onClick={closeModal}>Ok</Button>
            </HighlitedText>
          </ModalContent>
        </Modal>
        <RegisterOptionWrapper>
          <HeadingContainer>
            <Line></Line>
            <Heading>NCL-V-2022</Heading>
            <Line></Line>
          </HeadingContainer>
          <CardContainer>
            <RegisterCard setModalState={setModalState} {...playerRegister} />
            <RegisterCard {...ownerRegister} />
            <RegisterCard {...volunteerRegister} />
          </CardContainer>
        </RegisterOptionWrapper>
      </RegisterOptionContainer>
    </>
  );
};

export default RegisterOptionPage;
