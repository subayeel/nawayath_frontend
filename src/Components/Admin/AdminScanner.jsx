import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";

//firebase
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
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
  SelectField,
} from "./Admin.elements";
import { Button } from "../RegisterPage/RegisterPage.elements";

import { useNavigate } from "react-router-dom";
const AdminScanner = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState();
  const [delay, setDelay] = useState(1000);
  const [dataRecieved, setDataRecieved] = useState(false);

  const [name, setName] = useState();
  const [paymentId, setPaymentId] = useState();
  const [teamName, setTeamName] = useState();
  const [imageUrl, setImageUrl] = useState();

  const [isVerified, setVerified] = useState(false);

  const [selected, setSelected] = useState("environment");

  const [guest1, setGuest1] = useState("");
  const [guest2, setGuest2] = useState("");
  const [teamAnalyst, setTeamAnalyst] = useState("");
  const [technicalHead, setTechnicalHead] = useState("");

  //method to scan qr
  const handleScan = async (scanData) => {
    setResult(scanData);

    // await getOwnerdetails(JSON.parse(result.text).paymentId);
  };

  const handleError = (error) => {
    console.log(error);
  };

  //add to access granted list
  const addToGrantedList = async (
    ownerNameP,
    guest1P,
    guest2P,
    teamAnalystP,
    technicalHeadP
  ) => {
    try {
      const docRef = await addDoc(collection(db, "accessGranted"), {
        ownerName: ownerNameP,
        guest1: guest1P,
        guest2: guest2P,
        teamAnalyst: teamAnalystP,
        technicalHead: technicalHeadP,
        entry: "granted",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("UNSUCCESSFULL: " + error);
    }
  };

  // async function getGrantedList() {
  //   const q = query(
  //     collection(db, "accessGranted"),
  //     where("entry", "==", "granted")
  //   );

  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {

  //   });
  // }

  useEffect(() => {
    if (result) {
      setDataRecieved(true);
      getOwnerdetails(JSON.parse(result).paymentId);
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

        //setting

        // setGuest1(doc.data().guest1);
        // setGuest2(doc.data().guest2);
        // setTeamAnalyst(doc.data().teamAnalyst);
        // setTechnicalHead(doc.data().technicalHead);

        addToGrantedList(
          JSON.parse(result).name,
          doc.data().guest1,
          doc.data().guest2,
          doc.data().teamAnalyst,
          doc.data().technicalHead
        );
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
    navigate("/access-granted");
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
            <Text3>Scan QR to grant permission</Text3>
              <QrReader
                facingMode={selected}
                delay={delay}
                onError={handleError}
                style={previewStyle}
                onScan={handleScan}
              />
              <SelectField
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
              >
                <option value={"environment"}>Back-Camera</option>
                <option value={"user"}>Front-Camera</option>
              </SelectField>
            </ScannerContainer>
          )}
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default AdminScanner;
