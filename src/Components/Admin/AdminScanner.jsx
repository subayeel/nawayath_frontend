import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";

//firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config";

import { MainContainer, MainWrapper } from "../Global";

//stylings
import {
  StyledModal,
  ImgWrap,
  Img,
  ModalContent,
  HighlitedText,
  CloseIcon,
  Text3,
  ScannerContainer,
} from "./Admin.elements";
import { Button } from "../RegisterPage/RegisterPage.elements";
const AdminScanner = () => {
  const [result, setResult] = useState();
  const [delay, setDelay] = useState();
  const [dataRecieved, setDataRecieved] = useState(false);
  const [qrData, setQrData] = useState();

  const [name, setName] = useState();
  const [paymentId, setPaymentId] = useState();
  const [teamName, setTeamName] = useState();
  const [imageUrl, setImageUrl] = useState();

  const [isVerified, setVerified] = useState(false);

  //method to scan qr
  const handleScan = async (data) => {
    if (data !== null) {
      await getOwnerdetails(JSON.parse(data.text).paymentId);
    }
    setResult(data);
    console.log("scanning");
  };

  const handleError = (error) => {
    console.log(error);
  };
  useEffect(() => {
    if (result) {
      setDataRecieved(true);
      setQrData(JSON.parse(result.text));
      console.log(JSON.parse(result.text));
    }
  }, [result]);

  //qrcode stylings
  const previewStyle = {
    width: "14rem",
    height: "14rem",
  };

  //get auth user details
  const getOwnerdetails = async (pid) => {
    const ownerRef = collection(db, "ownerDetails");
    // Create a query against the collection.
    const q = query(ownerRef, where("razorpay_payment_id", "==", pid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      if (pid === doc.data().razorpay_payment_id) {
        setVerified(true);
        setName(doc.data().ownerFullName);
        setTeamName(doc.data().teamName);
        setPaymentId(doc.data().razorpay_payment_id);
        setImageUrl(doc.data().ownerTeamLogo);
        setModalState(true);
      }
    });
  };

  //handle Modal
  const [modalState, setModalState] = useState(false);
  function openModal() {
    setModalState(true);
  }
  function closeModal() {
    setModalState(false);
  }

  return (
    <>
      <MainContainer>
        <MainWrapper>
          <StyledModal
            onRequestClose={closeModal}
            handleState={setModalState}
            isOpen={modalState}
          >
            <ModalContent>
              <CloseIcon onClick={closeModal} />

              <ImgWrap>
                <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/check.png?alt=media&token=5b833cd4-760d-4a16-8738-5ebdfc86d563" />
              </ImgWrap>
              <Text3>Access Granted!</Text3>
              <HighlitedText>{name}</HighlitedText>
              <Text3>{teamName}</Text3>
              <HighlitedText>
                <Button onClick={closeModal} to="/access-granted">
                  Ok
                </Button>
              </HighlitedText>
            </ModalContent>
          </StyledModal>

          {dataRecieved ? (
            ""
          ) : (
            <ScannerContainer>
              <QrReader
                facingMode="rear"
                delay={delay}
                onError={handleError}
                style={previewStyle}
                onScan={handleScan}
              />
            </ScannerContainer>
          )}
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default AdminScanner;
