import React from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db} from "../../config"
import {
  FormContainer,
  FormGroup,
  Label,
  InputField,
  SubmitBtn,
  FieldContainer,
  FormWrapper,
  HeadingContainer,
  Line,
  Heading,
  SelectField,
  DateField,
  CheckBoxContainer,
  CheckBox,
  FileInput,
  RadioBtn,
  ConditionalContainer,
  LinkText,
  ModalContainer,
  ImgWrap,
  Img,
  ModalContent,
  Text2,
  Heading2,
  Text3,
  HighlitedText,
  CloseIcon,Button
} from "./RegisterPage.elements";
import { checkoutHandler } from "../../RazorPay";
import { useState, useEffect } from "react";
import { storage } from "../../config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



import Modal from "react-modal";

const RegisterPage = () => {
  Modal.setAppElement("#root");
  const [checkNclValues, setCheckNclValues] = useState({
    playedNcl1: "no",
    playedNcl2: "no",
    playedNcl3: "no",
    playedNcl4: "no",
  });
  // to open the rules modal
  const [modalState, setModalState] = useState(false);
  const [playedNcl, setPlayedNcl] = useState(false);

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    dob: "",
    nativeLoc: "",
    playerRole: "",
    playedNclBefore: "",
    playedNcl1: "no",
    playedNcl2: "no",
    playedNcl3: "no",
    playedNcl4: "no",
    nawayathResidentBanglore: "",
    occupation: "",
    sportsClub: "",
    educationInstitute: "",
    playerImageUrl: null,
    shirtSize: "",
    trouserSize: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({}); //error causing state -_-
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //function to handle check
  const handleNclCheck = (e) => {
    const { name, value } = e.target;
    if (e.target.checked === true) {
      setFormValues({ ...formValues, [name]: "yes" });
    } else {
      setFormValues({ ...formValues, [name]: "no" });
    }
  };

  //Adding seasons played object to formValues
  // useEffect(() => {
  //   setFormValues({ ...formValues, ["playedNcl1"]: checkNclValues.playedNcl1 });
  //   setFormValues({ ...formValues, ["playedNcl2"]: checkNclValues.playedNcl2 });
  //   setFormValues({ ...formValues, ["playedNcl3"]: checkNclValues.playedNcl3 });
  //   setFormValues({ ...formValues, ["playedNcl4"]: checkNclValues.playedNcl4 });
  // }, [checkNclValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  //restricting image size
  const handleImage = (e) => {
    if (e.target.files[0].size >= 1000000) {
      e.target.value = "";
      alert("Upload image with size less than 1MB");
    } else {
      const storageRef = ref(
        storage,
        `/playerImages/${e.target.files[0].name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFormValues({ ...formValues, ["playerImageUrl"]: url });
          });
        }
      );
    }
  };

  //conditional rendering NCL checkboxes
  useEffect(() => {
    if (formValues.playedNclBefore === "Yes") {
      setPlayedNcl(true);
    } else {
      setPlayedNcl(false);
    }
  }, [formValues.playedNclBefore]);

  //innitiating payment on condition
  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     uploadDummyForm()
  //     checkoutHandler(200, formValues, "player");
  //   }
  // }, [formErrors]);

  const handleTermsCheck = (e) => {
    if (e.target.checked === true) {
      setFormValues({ ...formValues, ["termsAndConditions"]: "yes" });
    } else {
      setFormValues({ ...formValues, ["termsAndConditions"]: "no" });
    }
  };
  const validate = (values) => {
    const errors = {};
    var nativeLoc = document.getElementById("nativeLoc");
    var playerRole = document.getElementById("playerRole");
    if (nativeLoc.selectedIndex <= 0) {
      errors.native = "Native is required";
      alert("Native is Required");
    } else if (playerRole.selectedIndex <= 0) {
      errors.playerRole = "Player Roler is required";
      alert("Player Role is required");
    } else if (!values.firstName) {
      errors.username = "First Name is required";
      alert("First Name is required");
    } else if (!values.mobileNumber) {
      errors.mobileNumber = "Mobile Number is required";
      alert("Mobile Number is required");
    } else if (values.mobileNumber.length > 10) {
      errors.mobileNumber = "Invalid Mobile Number";
      alert("Invalid Mobile Number");
    } else if (values.mobileNumber.length < 10) {
      errors.mobileNumber = "Invalid Mobile Number";
      alert("Invalid Mobile Number");
    } else if (values.playerImageUrl === null) {
      errors.playerImageUrl = "Invalid Image type";
      alert("Invalid Image type");
    }
    return errors;
  };
  function openModal() {
    setModalState(true);
  }
  function closeModal() {
    setModalState(false);
  }

  async function  uploadDummyForm(){
    try {
      const docRef = await addDoc(collection(db, "playerDummyDetails"), {
        firstName: formValues.firstName,
        middleName: formValues.middleName,
        lastName: formValues.lastName,
        mobileNumber: formValues.mobileNumber,
        dob: formValues.dob,
        nativeLoc: formValues.nativeLoc,
        playerRole: formValues.playerRole,
        playedNclBefore: formValues.playedNclBefore,
        playedNcl1: formValues.playedNcl1,
        playedNcl2: formValues.playedNcl2,
        playedNcl3: formValues.playedNcl3,
        playedNcl4: formValues.playedNcl4,
        occupation: formValues.occupation,
        sportsClub: formValues.sportsClub,
        educationInstitute: formValues.educationInstitute,
        playerImageUrl: formValues.playerImageUrl,
        shirtSize: formValues.shirtSize,
        trouserSize: formValues.trouserSize,
        nawayathResidentBanglore: formValues.nawayathResidentBanglore,
        razorpay_payment_id: "",
      });
      console.log("Document written with ID: ", docRef.id);
      
    } catch (error) {
      console.log("UNSUCCESSFULL: " + error);
    }
  }
  const customStyles = {
    content: {
      width: "70%",
      height: "70%",
      position: "absolute",
      left: "50%",
      top: "55%",
      transform: "translate(-50%, -50%)",
    },
  };


  //new modal
  
  // to open the closed modal
  const [playerModalState, setPlayerModalState] = useState(true);
  function openPlayerModal() {
    setModalState(true);
  }
  function closePlayerModal() {
    setModalState(false);
  }
  const customPlayerModalStyles = {
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
      <FormContainer>
      {/* Player form closed modal */}

      <Modal
          style={customPlayerModalStyles}
          onRequestClose={closePlayerModal}
          handleState={setPlayerModalState}
          isOpen={playerModalState}
        >
          <ModalContent>
            <CloseIcon onClick={closePlayerModal} />

            <ImgWrap>
              <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/closed.png?alt=media&token=0957f6f3-a13d-4399-8d94-d69a91e51e3b" />
            </ImgWrap>
            <Text3>Player Registration has been Closed!</Text3>
            <HighlitedText>
              <Button onClick={closePlayerModal} to="/">Ok</Button>
            </HighlitedText>
          </ModalContent>
        </Modal>
      {/* Terms and condition modal */}
        <Modal
          style={customStyles}
          onRequestClose={closeModal}
          handleState={setModalState}
          isOpen={modalState}
        >
          <CloseIcon onClick={closeModal} />
          <ModalContent>
            <ImgWrap>
              <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/ncl-logo.PNG?alt=media&token=6fe8663e-08b5-4ab4-9cba-3a42128b2e4c" />
            </ImgWrap>
            <HeadingContainer>
              <Line></Line>
              <Heading>Code & Ethics</Heading>
              <Line></Line>
            </HeadingContainer>
            <Heading2>PREAMBLE – THE SPIRIT OF CRICKET</Heading2>
            <Text2>
              Cricket owes much of its appeal & enjoyment to the fact that it
              should be played not only according to the laws (which are
              incorporated within these playing conditions), but also within the
              spirit of cricket. There are some laws which place the
              responsibility for the player’s conduct.
            </Text2>
            <HighlitedText>
              There are some laws which place the responsibility for the
              player’s conduct. The spirit of the game involves RESPECT for your
              opponent’s, your official’s, your own team & The spectators.
            </HighlitedText>
            <Heading2>IT IS AGAINST THE SPIRIT OF THE GAME:</Heading2>
            <Text2>
              <ol>
                <li>
                  To dispute an umpire's decision by word, action or gesture.
                </li>
                <li>
                  To direct abusive language towards an opponent or umpire.
                </li>
                <li>
                  To indulge in cheating or any sharp practice, for instance.
                </li>
                <li> To appeal knowing that the batsman is not out.</li>
                <li>
                  To advance towards an umpire in an aggressive manner when
                  appealing.
                </li>
                <li>
                  To seek to distract an opponent either verbally or by
                  harassment with persistent clapping or unnecessary noise under
                  the guise of enthusiasm and motivation of one's own side.
                </li>
                <li>
                  Abuse of cricket equipment or clothing, ground equipment or
                  fixtures & fittings.
                </li>
                <li>
                  Use language or gestures that offended, insult, humiliate,
                  intimidate or threaten.
                </li>
                <li>
                  Use language that is obscene, offensive or insulting & or the
                  making of obscene gestures of a seriously insulting nature to
                  another player, official or spectator.
                </li>
                <li>
                  Point or gesture towards the pavilion, or behave aggressively
                  or derisively towards either batsman, upon the dismissal of a
                  batsman.
                </li>
                <li>
                  Threaten to assault another player, umpire, team official or
                  spectator. Engage in inappropriate & Deliberate physical
                  contact with other players, umpires or officials in the course
                  of play.
                </li>
                <li>
                  Deliberately & maliciously distract or obstruct another
                  players or officials on the field of play.
                </li>
                <li>
                  Show excessive dissent at an umpire’s decision by action or
                  verbal abuse.
                </li>
                <li>Engage in excessive appealing.</li>
              </ol>
            </Text2>
            <Heading2>VIOLENCE</Heading2>
            <Text2>
              There is no place for any act of violence on the field of play.
            </Text2>
            <Heading2>SAFETY</Heading2>
            <Text2>
              <ol>
                <li>
                  {" "}
                  It’s all players’ responsibility to play fair & safe game.
                </li>
                <li>
                   Nawayath Club with its members will take reasonable
                  precautions, they cannot be held liable or responsible for any
                  injuries to individuals. Players should take part at their own
                  risk.
                </li>
                <li>
                  It is advisable for all players to take safety measures on
                  their own for any injuries during the tournament, as Nawayath
                  Club will not be responsible in any way.
                </li>
              </ol>
            </Text2>
            <HighlitedText>
              Player’s and umpire have together set the tone for the conduct of
              a cricket match. Every player is expected to make an important
              contribution to this.
            </HighlitedText>
            <ImgWrap>
              <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/ncl-logo.PNG?alt=media&token=6fe8663e-08b5-4ab4-9cba-3a42128b2e4c" />
              <Text3>Signature of Organizer</Text3>
            </ImgWrap>
          </ModalContent>
        </Modal>
        <FormWrapper>
          <HeadingContainer>
            <Line />
            <Heading>NCL-V-2022</Heading>
            <Line />
          </HeadingContainer>
          <FormGroup onSubmit={handleSubmit}>
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <FieldContainer>
              <Label>
                First Name:
                <InputField
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Middle Name:
                <InputField
                  name="middleName"
                  value={formValues.middleName}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Last Name:
                <InputField
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="shirtSize">
                T-Shirt Size:
                <SelectField
                  value={formValues.shirtSize}
                  onChange={handleChange}
                  name="shirtSize"
                  required
                >
                  <option value="" disabled>
                    Select your option
                  </option>
                  <option value="XS">XS</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                </SelectField>
              </Label>
              <Label htmlFor="trouserSize">
                Trouser Size:
                <SelectField
                  value={formValues.trouserSize}
                  onChange={handleChange}
                  name="trouserSize"
                  required
                >
                  <option value="" disabled>
                    Select your option
                  </option>
                  <option value="XS">XS</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                </SelectField>
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Mobile No:
                <InputField
                  name="mobileNumber"
                  value={formValues.mobileNumber}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Date of Birth:
                <DateField
                  required
                  name="dob"
                  value={formValues.dob}
                  onChange={handleChange}
                />
              </Label>
              <Label htmlFor="native">
                Native:
                <SelectField
                  value={formValues.nativeLoc}
                  onChange={handleChange}
                  id="nativeLoc"
                  name="nativeLoc"
                  required
                >
                  <option value="" disabled>
                    Select your option
                  </option>
                  <option value="Bhatkal">Bhatkal</option>
                  <option value="Byndoor">Byndoor</option>
                  <option value="Gersoppa">Gersoppa</option>
                  <option value="Herangdi">Herangdi</option>
                  <option value="Manki">Manki</option>
                  <option value="Murdeshwar">Murdeshwar</option>
                  <option value="Shirali">Shirali</option>
                  <option value="Shiroor">Shiroor</option>
                  <option value="Valki">Valki</option>
                </SelectField>
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="playerRole">
                Player Role:
                <SelectField
                  value={formValues.playerRole}
                  onChange={handleChange}
                  id="playerRole"
                  name="playerRole"
                >
                  <option value="" disabled>
                    Select your option
                  </option>
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler">Bowler</option>
                  <option value="All-rounder">All-rounder</option>
                  <option value="Wicket keeper">Wicket keeper</option>
                </SelectField>
              </Label>

              <Label>
                Ever played NCL before?
                <CheckBoxContainer>
                  <Label htmlFor="playedNclBefore">
                    <RadioBtn
                      value="Yes"
                      onChange={handleChange}
                      name="playedNclBefore"
                      required
                    />
                    Yes
                  </Label>

                  <Label htmlFor="playedNclBefore">
                    <RadioBtn
                      name="playedNclBefore"
                      onChange={handleChange}
                      value="No"
                    />
                    No
                  </Label>
                </CheckBoxContainer>
              </Label>
              <ConditionalContainer state={playedNcl}>
                <Label>
                  If yes, Which season you were part of?
                  <FieldContainer>
                    <CheckBoxContainer>
                      <Label htmlFor="playedNcl1">
                        <CheckBox
                          onChange={handleNclCheck}
                          type="checkbox"
                          name="playedNcl1"
                        />
                        NCL-1
                      </Label>

                      <Label htmlFor="playedNcl2">
                        <CheckBox
                          onChange={handleNclCheck}
                          type="checkbox"
                          name="playedNcl2"
                        />
                        NCL-2
                      </Label>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                      <Label htmlFor="playedNcl3">
                        <CheckBox
                          onChange={handleNclCheck}
                          type="checkbox"
                          name="playedNcl3"
                        />
                        NCL-3
                      </Label>
                      <Label htmlFor="playedNcl4">
                        <CheckBox
                          onChange={handleNclCheck}
                          type="checkbox"
                          name="playedNcl4"
                        />
                        NCL-4
                      </Label>
                    </CheckBoxContainer>
                  </FieldContainer>
                </Label>
              </ConditionalContainer>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Are you a Nawayath resident in Bengaluru?
                <CheckBoxContainer>
                  <Label htmlFor="nclyes">
                    <RadioBtn
                      name="nawayathResidentBanglore"
                      onChange={handleChange}
                      value="yes"
                      id="nclyes"
                      required
                    />
                    Yes
                  </Label>

                  <Label htmlFor="nclno">
                    <RadioBtn
                      name="nawayathResidentBanglore"
                      onChange={handleChange}
                      value="No"
                      id="nclno"
                    />
                    No
                  </Label>
                </CheckBoxContainer>
              </Label>
              <Label name="occupation">
                Occupation?
                <CheckBoxContainer>
                  <Label htmlFor="student">
                    <RadioBtn
                      onChange={handleChange}
                      name="occupation"
                      value="student"
                      required
                      id="student"
                    />
                    Student
                  </Label>

                  <Label htmlFor="employee">
                    <RadioBtn
                      onChange={handleChange}
                      name="occupation"
                      value="employee"
                      id="employee"
                    />
                    Employee
                  </Label>
                  <Label htmlFor="self-employed">
                    <RadioBtn
                      onChange={handleChange}
                      name="occupation"
                      value="self-employed"
                      id="self-employed"
                    />
                    Self-Employed
                  </Label>
                </CheckBoxContainer>
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Name(s) of sports club(s) you are/were part of?:
                <InputField
                  required
                  name="sportsClub"
                  onChange={handleChange}
                />
              </Label>

              <Label>
                Name of Educational Institution
                (Student)/Company(Employee)/Firm(Self-Employed)
                <InputField
                  required
                  name="educationInstitute"
                  onChange={handleChange}
                />
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Attach your profile image which will be used for auction
                purpose, Please upload your image upto shoulders only.
                <br />
                Passport size photo preferred
                <FileInput name="playerImage" onChange={handleImage} required />
              </Label>
            </FieldContainer>
            <br />
            <FieldContainer>
              <Label htmlFor="terms">
                <CheckBox
                  type="checkbox"
                  onChange={handleTermsCheck}
                  required
                ></CheckBox>
                I, therefore declare that the information provided above is true
                to the best of my knowledge, and I will obey all the{" "}
                <LinkText onClick={openModal}>Rules and Regulations</LinkText>
                of the organising committee.
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                For any queries/refunds/cancellation regarding payment Please{" "}
                <Link to="/ourteam"> Contact us</Link>.
              </Label>
            </FieldContainer>

            <SubmitBtn >Proceed to payment</SubmitBtn>
          </FormGroup>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default RegisterPage;
