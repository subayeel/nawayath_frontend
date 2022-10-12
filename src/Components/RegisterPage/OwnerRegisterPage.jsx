import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { app } from "../../config";
import {
  FieldContainer,
  FormContainer,
  FormGroup,
  FormWrapper,
  Heading,
  HeadingContainer,
  InputAreaField,
  InputField,
  Label,
  Line,
  Heading2,
  FileInput,
  SubmitBtn,
  ModalContent,
  InstagramIcon,
  CheckBox,
  LinkText,
  ImgWrap,
  Img,
  Text2,
  HighlitedText,
  Text3,
  CloseIcon,
} from "./RegisterPage.elements";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config.js";

import { checkoutHandler } from "../../RazorPay";

const OwnerRegisterPage = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValues = {
    teamName: "",
    companyName: "",
    businessNature: "",
    logoImage: "",
    instaLink: "",
    ownerFullName: "",
    ownerContactNumber: "",
    ownerEmailId: "",
    ownerPresentAddress: "",
    ownerPermanentAddress: "",
    managerFullName: "",
    managerContactNumber: "",
    managerEmailId: "",
    managerPermanentAddress: "",
    managerPresentAddress: "",
    ownerTeamLogo: null,
  };

  const [isActive, setIsActive] = useState(true);

  //form inputs stored dynamically
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleImage = (e) => {
    console.log(e.target.files[0].size);
    if (e.target.files[0].size >= 1000000) {
      e.target.value = "";
      alert("Upload image with size less than 1MB");
    } else {
      const storageRef = ref(
        storage,
        `/ownerTeamLogo/${e.target.files[0].name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFormValues({ ...formValues, ["ownerTeamLogo"]: url });
          });
        }
      );
    }
  };

  //innitiating payment on condition
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      checkoutHandler(10000, formValues, "owner");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (
      values.managerContactNumber.length !== 10 ||
      !values.managerContactNumber
    ) {
      errors.mobileNumber = "Invalid Mobile Number";
      alert("Invalid Mobile Number");
    }
    return errors;
  };

  const handleTermsCheck = (e) => {
    if (e.target.checked === true) {
      setFormValues({ ...formValues, ["termsAndConditions"]: "yes" });
    } else {
      setFormValues({ ...formValues, ["termsAndConditions"]: "no" });
    }
  };

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

  function openModal() {
    setModalState(true);
  }
  function closeModal() {
    setModalState(false);
  }

  const [modalState, setModalState] = useState(false);
  return (
    <>
      <FormContainer>
        <Modal
          style={customStyles}
          onRequestClose={() => {
            setModalState(false);
          }}
          isOpen={modalState}
        >
          <CloseIcon onClick={closeModal} />
          <ModalContent>
            <ImgWrap>
              <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/ncl-logo.PNG?alt=media&token=6fe8663e-08b5-4ab4-9cba-3a42128b2e4c" />
            </ImgWrap>
            <HeadingContainer>
              <Line />
              <Heading>NAWAYATH CRICKET LEAGUE-V-2022</Heading>
              <Line />
            </HeadingContainer>
            <Heading2 center>SAGA V</Heading2>
            <Heading2 center>
              <b>Team Ownership Agreement</b>
            </Heading2>
            <Text2>
              This team ownership agreement is entered into by and between
              (“Owner”) and Nawayath Club (“Organizer”) for the event
              known as The Nawayath Cricket League-V-2022 (“Event”).
            </Text2>
            <HighlitedText color="black">
              There are some laws which place the responsibility for the
              player’s conduct. The spirit of the game involves RESPECT for your
              opponent’s, your official’s, your own team & The spectators.
            </HighlitedText>
            <Heading2>I. OWNERSHIP</Heading2>
            <Text3 start>
              <ol>
                <li>
                  The parties agree that the owner shall be designated as
                  presenting owner of a team in the Event.
                </li>
                <li>
                  The owner shall own a team only if met with the requirement of
                  being a registered firm / company / outlet.
                </li>
              </ol>
            </Text3>
            <Heading2>II. OWNERSHIP FEES</Heading2>
            <Text3 start>
              <ol>
                <li>
                  The ownership fees payable by the owner to the organizer for
                  the team ownership shall be 50,000. 10,000.00 payable as
                  deposit & 40,000 after confirmation from the organizing
                  committee.
                </li>
                <li>
                  If owner withdrew his name from the league by his own reasons,
                  then the deposit fees will not be refundable.
                </li>
                <li>
                  The ownership fees for team shall be refunded in case of
                  cancellation of the league.
                </li>
              </ol>
            </Text3>
            <Heading2>III. OWNERSHIP TERM</Heading2>
            <Text3 start>
              <ol>
                <li>
                  The term of the agreement begins on the date of the execution
                  of this agreement by the last party to sign and ends at the
                  conclusion of the event.
                </li>
              </ol>
            </Text3>
            <Heading2>IV. RESPONSIBILITIES OF OWNERS</Heading2>
            <Text3 start>
              <ol>
                <li>
                  Any players purchase during auction can’t be replace with any
                  other at any circumstances.
                </li>
                <li>
                  If any problems arise after auction about any player, owners
                  need to inform NCL organizing committee at least 3 days prior
                  before play day in written & with having player signature on
                  it.
                </li>
                <li>
                  Once tournament get start no players can be replace at any
                  circumstances.
                </li>
                <li>
                  Once auction completed its all-owner responsibilities about
                  all the players to be on time at ground.
                </li>
              </ol>
            </Text3>
            <Heading2>V. RIGHTS AND OBLIGATIONS</Heading2>
            <Text3 start>
              As the owner of the team for the event, the following rights and
              benefits shall accrue to the owner:
              <ol>
                <li>
                  If the team wins, the winning amount will be handed over to
                  the team owner.
                </li>
                <li>
                  Owner is responsible for himself and his team members to abide
                  by the “RULES AND REGULATIONS OF NCL-V-2022”
                </li>
                <li>
                  If the owner or any of his team member fails to abide by the
                  above obligation, then he would be held liable for the failure
                  of the agreement and may be charged a penalty which may extend
                  up to an amount similar to the ownership fees in order for the
                  team continue in the event. The severity of the penalty will
                  be decided by the organizers in discussion within themselves.
                </li>
                <li>
                  • Any amendments can be made by the organizer after its signed
                  as they deem fit. The organizer shall reserve all the right to
                  make the further amendments to the agreement or any other
                  details related to the event. The amendment made will be
                  communicated to the owner at the earliest before the start of
                  the event.
                </li>
              </ol>
            </Text3>
            
            <Heading2>I. GENERAL RULES OF THE LEAGUE</Heading2>
            <Text2>
              <ol>
                <li>
                  The main goal of the nawayath cricket league is to bring all
                  the nawayath community youths together to play cricket for fun
                  and bonding with our community people residing in bangalore.
                </li>
                <li>
                  All matches will be governed by the laws of cricket except as
                  otherwise stated in the nawayath cricket league playing rules
                  (this document)
                </li>
                <li>
                  Each team will appoint a team representative, whose primary
                  duty shall be to represent the team if required and manage the
                  team including maintaining the team discipline both infield
                  and outside.
                </li>
                <li>
                  Each team must field with a total of 11 players at any time
                  during the match. The total players in a team may be up to 16
                  players, i.e., 5 substitute players.
                </li>
                <li>
                  The team owner/ team representative will decide the team
                  jersey colour.
                </li>
              </ol>
            </Text2>
            <Heading2>II. AUCTION</Heading2>
            <Text2>
              <ol>
                <li>
                  It is mandatory for the team owner(s) or team representative
                  to attend the auction held for the entire NCL-V-2022
                  registered players for the league.
                </li>
                <li>
                  The profiles of all the registered players will be given to
                  the teams prior to the auction.
                </li>
                <li>
                  Each team will be allotted a maximum number of 1000 points
                  with which it is required to do the bidding for players at the
                  auction.
                </li>
                <li>
                  5. If an icon player is selected by more than one team for the
                  league, the icon player will have to choose the team in which
                  he wishes to be a part of, most importantly before the start
                  of auction.
                </li>
                <li>
                  All the registered players will be auctioned out to the team
                  to fill the space of the required players needed in the team.
                </li>
                <li>
                  Its mandatory to bid at least 6 Bangalore based players out of
                  14 players in the auction or if a team wish they can bid more
                  than 6 Bangalore based Players.
                </li>
                <li>
                  If an owner wishes to play in his team, then he can declare
                  himself as a Star Player or Guest Player.
                </li>
              </ol>
            </Text2>
            <Heading2>III. RULES OF THE GAME</Heading2>
            <Text2>
              <ol>
                <li>
                  1. A match consists of a maximum of 10 (legal 6 balls) over’s
                  bowled by each side. A team shall not be permitted to declare
                  its innings closed.
                </li>
                <li>
                  2. Playing 11 will consist minimum of 4 bangalore based
                  players.
                </li>
                <li>
                  3. A new ball will be used for a new inning in all the
                  matches.
                </li>
                <li>4. Role wise rules are given below in details: -</li>
              </ol>
            </Text2>
            <Text2>
              <ol>
                <Heading2>A. BOWLERS</Heading2>
                <li>
                  Each member of the fielding side can bowl under the following
                  allocation with the exception of the wicketkeeper:
                </li>
                <ul>
                  <li>
                    i. Bowlers can bowl - one-fifth of the total overs in an
                    innings. For 10 over’s match its 2 overs.
                  </li>
                  <li>
                    ii. In the event of a bowler being unable to complete an
                    over, the remaining balls will be bowled by another bowler.
                    Such part of an over will count as a full over only in so
                    far as each bowler's limit is concerned.
                  </li>
                  <li>
                    iii. Under no circumstances shall any bowler be permitted to
                    bowl more than 2 overs in an innings.
                  </li>
                </ul>
              </ol>
              <ol>
                <Heading2>B. WICKET KEEPER'S ROLE</Heading2>
                <li>
                  {" "}
                  Under no circumstances shall the nominated wicketkeeper be
                  allowed to bowl.
                </li>
                <li>The wicketkeeper must be nominated prior to the toss.</li>
                <li>
                  During play the wicketkeeper must wear wicket keeping gloves
                  and must stand in a normal wicketkeeper position at the
                  instant of delivery, otherwise no-ball will be called.
                </li>
                <li>
                  A wicketkeeper cannot be changed during a match unless injury
                  during play time.
                </li>
              </ol>
              <ol>
                <Heading2>C. UNDER ARM BOWLING</Heading2>
                <HighlitedText>
                  Underarm bowling is strictly prohibited.
                </HighlitedText>
              </ol>
              <ol>
                <Heading2>D. NO BALLS</Heading2>A no-ball shall count as 1 extra
                to the batting side and an extra ball shall be bowled. Any runs
                scored from a no-ball (off the bat, bye or leg-bye) will be
                credited in addition to the 1 extra for the no-ball.
                <li>
                  i. Any ball which passes the batsman above the shoulder height
                  in his normal stance or would have passed above shoulder
                  height if it strikes the batsman's bat or body shall be called
                  no-ball.
                </li>
                <li>
                  ii. Any ball which having not bounced after leaving the
                  bowler's hand passes the batsman above waist height, or would
                  have passed him above waist height if it strikes the bat or
                  body of the batsman standing in a normal stance, shall be
                  called a no ball.
                </li>
                <li>iii. The ball remains live after the call of no-ball.</li>
                <li>
                  iv. Normal laws of cricket apply to a call of no-ball. If
                  after the delivery the ball is considered wide, the call of
                  no-ball shall take precedence and the ball shall remain live.
                </li>
                <li>
                  v. Free-Hit will be awarded to batsmen for every kind of
                  no-ball, his next delivery is designated a "free-hit". In this
                  circumstance the batsman can only be dismissed through a run
                  out, hitting the ball twice or obstructing the field.
                </li>
              </ol>

              <ol>
                <Heading2>E. INJURY</Heading2>
                If a fielder is injured or becomes ill during the course of a
                match, a substitute fielder will be permitted, subject to the
                umpire's approval. The substitute fielder will not be allowed to
                bowl or bat. Once a replacement fielder is introduced, the
                player being replaced shall not be permitted to field again
                during the innings in progress.
                <HighlitedText>
                  Replacements shall only be allowed in the case of an injury
                  sustained during a match.
                </HighlitedText>
              </ol>

              <ol>
                <Heading2>F. FIELD RESTRICTIONS</Heading2>
                <li>
                  i. Two semi-circles shall be drawn on the field of play. The
                  semi-circles have as their centre the middle stump at either
                  end of the pitch. The field restriction area will be marked by
                  continuous painted lines.
                </li>
                <li>
                  ii. At the instant of delivery, there may not be more than
                  five fieldsmen on the leg side.
                </li>
                <li>
                  iii. During the first three over’s, a maximum of two fielders
                  can be outside the field restriction area at the instant of
                  each delivery i.e., 30- yard circle (this is known as the
                  power play).
                </li>
                <li>
                  iv. For the remaining over’s only five fieldsmen are permitted
                  to be outside of the field restriction area at the instant of
                  each delivery i.e., 30- yard circle.{" "}
                </li>
              </ol>
              <ol>
                <Heading2>G. LENGTH OF INNINGS</Heading2>
                <li>
                  i. The maximum time allowed for each innings shall be 45
                  minutes.
                </li>
                <li>
                  ii. An interval of 10 minutes shall be allowed for the
                  changeover of innings.
                </li>
              </ol>
              <ol>
                <Heading2>H. UNINTERRUPTED MATCHES</Heading2>
                <li>
                  i. Each team shall bat for 10 (legal six ball) overs unless
                  all out earlier. A team shall not be permitted to declare its
                  inning s closed.
                </li>
                <li>
                  ii. If the team batting first is dismissed in less than 10
                  overs’, the team batting second shall be entitled to bat for
                  10 overs.
                </li>
              </ol>
              <ol>
                <Heading2>I. DELAYED OR INTERRUPTED MATCHES</Heading2>
                <li>
                  i. A match shall be classed as a continue match by ruling of
                  the Umpires, due to poor weather, light, ground or pitch
                  condition, if play commences late, is delayed for more than 30
                  minutes or is unable to commence or continue to achieve a
                  result within the allocated overs or time to constitute a
                  match, providing a result has not already been achieved.
                </li>
                <li>
                  ii. The match may be extended up to a maximum of 15 minutes
                  due to a loss of play. (2 hours duration constitutes a normal
                  match.)
                </li>
                <li>
                  iii. Umpires, Captains and Players should remember the aim is
                  to endeavor to complete the objective minimum number of over’s
                  if possible and to continue play with the aim to try to
                  achieve results within the allocated time so that the spirit
                  of fair play is upheld.
                </li>
                <li>
                  iv. The team that scores the greatest number of runs shall be
                  declared the winner, except in the case that the team batting
                  second not being the winner has not concluded its innings due
                  to poor weather, light, ground or pitch conditions in which
                  case the match shall be declared a draw.
                </li>
              </ol>
              <ol>
                <Heading2>J. RESULT</Heading2>
                <li>
                  i. A match shall be won by the side having the highest score
                  at the completion of the match. The match concludes when the
                  nominated number of over’s have been completed, or when the
                  team batting second is dismissed within the nominated number
                  of overs.
                </li>
                <li>
                  ii. In case of match end with tie, super-over will be played,
                  1 over per innings. Currently, if the match ends with the
                  scores tied and there must be a winner, the tie is broken with
                  a one over per side eliminator, Each team nominates three
                  batsmen and one bowler to play a one-over per side.
                </li>
                <li>
                  iii. The team which bats second in the match bats first in the
                  super over, in turn, each side bats one over bowled by the one
                  nominated opposition bowler, with their innings over if they
                  lose two wickets before the over is completed.
                </li>
                <li>
                  iv. The side with the higher score from their super over wins.
                </li>
                <li>
                  v. If the super over also ends up in a tie, the super over
                  will be repeated until one team has more runs than the other.
                </li>
              </ol>
              <ol>
                <Heading2>K. CAPTAINS</Heading2>
                Captains shall be responsible for nominating their teams for
                each match, for the time keeping of their innings and match, for
                the conduct of their team and for acting on their team’s behalf
                in the event of disputes.
              </ol>
              <ol>
                <Heading2>L. TIME KEEPING</Heading2>
                Time keeping is crucial to the success of the competition. Teams
                must be prepared in advance for each match as follows:
                <li>
                  i. Captains must toss at least 10 minutes before the scheduled
                  start of the match and at that time provide the umpire and
                  scorers with their selected team of 11 players, indicating the
                  captain, vice-captain, wicketkeeper and the substitute fielder
                  in case of injury or illness.
                </li>
                <li>
                  ii. A bowling team must be in condition to bowl the first ball
                  of the final over of the innings by the scheduled or
                  rescheduled time. If they fail to abide by this rule, then as
                  a penalty, one fewer fielder will be subsequently be allowed
                  outside the 30-yard circle for the final over in the innings.{" "}
                </li>
              </ol>
              <ol>
                <Heading2>M. INDEPENDENT UMPIRE’S & ORGANISER’S</Heading2>
                <li>
                  i. The decisions of the independent umpire’s & organizers on
                  the field of play shall be final. Their decision regarding
                  drawn matches due to loss of play shall also be final.
                </li>
                <li>
                  ii. Each match shall be under the control of two independent /
                  impartial umpires. The umpires shall be the sole judges of
                  fair and unfair play.
                </li>
                <li>
                  iii. In case of any issue both umpires will solve the problem,
                  if at all the problem is not solved then the case will be
                  solved by an independent third umpire, where he has every
                  right to discuss the matter with the nawayath cricket leagues
                  organizing committee.
                </li>
                <li>
                  iv. Nawayath cricket leagues organizing committee will not
                  make any decision which will favor any team or any player even
                  if their own members are representing a team as a player.
                </li>
                <li>
                  v. The independent umpire’s have every right to take any
                  decision at any time during the play and they can overturn
                  their decision. The decision overtaken will be as applicable
                  as per the rules of the ICC.
                </li>
              </ol>
              <ol>
                <Heading2>
                  N. THE NAWAYATH CRICKET LEAGUES ORGANIZING COMMITTEE
                </Heading2>
                The nawayath cricket leagues organizing committee reserves the
                right to amend the rules, or change the draw at any time, if
                they consider such actions to be in the best interest of the
                competition.
              </ol>
              <ol>
                <Heading2>O. EQUIPMENT</Heading2>
                <li>
                  i. Colored playing shirts must be worn, white cricket pants
                  and white shorts will not be acceptable. All teams must wear
                  approved T20I clothing and equipment.
                </li>
                <li>
                  ii. All teams shall supply their own playing equipment other
                  than the balls and stumps.
                </li>
              </ol>
              <ol>
                <Heading2>P. LEAGUE TABLE</Heading2>
                Teams in each group will be ranked according to the number of
                points gained. If two or more teams have the same number of
                points, the team with the best cumulative net run rate in
                matches between the teams will be placed higher.
              </ol>
            </Text2>
            <Line />
            <Heading>PREAMBLE – THE SPIRIT OF CRICKET</Heading>
            <Line />
            <Text2>
              Cricket owes much of its appeal and enjoyment to the fact that it
              should be played not only according to the laws (which are
              incorporated within these playing conditions), but also within the
              spirit of cricket. There are two laws which place the
              responsibility for the team's conduct firmly on the captain.
            </Text2>
            <Heading2>1. RESPONSIBILITY OF CAPTAIN’S</Heading2>
            <Text2>
              The captains are responsible at all times for ensuring that play
              is conducted within the spirit of the game as well as within the
              laws.
            </Text2>
            <Heading2>2. PLAYER’S CONDUCT</Heading2>
            <Text2>
              In the event of a player’s failing to comply with instructions by
              an umpire, or criticizing by word or action the decisions of an
              umpires, or showing dissent, or generally behaving in a manner
              which might bring the game into disrepute, the umpire’s concerned
              shall in the first place report the matter to the other umpire’s
              and to the player's captain, and instruct the latter to take
              action.
            </Text2>
            <Heading2>FAIR AND UNFAIR PLAY</Heading2>
            <Text2>
              <ul>
                <li>
                  The captains are responsible for ensuring that play is
                  conducted within the spirit of cricket, as well as with in
                  these playing conditions.
                </li>
                <li>
                  The umpires are the sole judges of fair and unfair play. The
                  umpires may intervene at any time and it is the responsibility
                  of the captain to take action where required as given by the
                  umpires.
                </li>
              </ul>
            </Text2>
            <Text2>
              <Heading2>
                THE UMPIRE’S ARE AUTHORIZED TO INTERVENE IN CASE OF:
              </Heading2>
              <ul>
                <li>Time wasting.</li>
                <li>Damaging the pitch.</li>
                <li>Dangerous or unfair bowling.</li>
                <li>Tampering with the ball.</li>
                <li>Any other action that they consider to be unfair.</li>
              </ul>
              <HighlitedText>
                The spirit of the game involves RESPECT for your opponent’s,
                your official’s, your own team and the spectator’s.
              </HighlitedText>
            </Text2>
            <Text2>
              <Heading2>IT IS AGAINST THE SPIRIT OF THE GAME: </Heading2>
              <ul>
                <li>
                  To dispute an umpire's decision by word, action or gesture.
                </li>
                <li>
                  To direct abusive language towards an opponent or umpire.
                </li>
                <li>
                  • To indulge in cheating or any sharp practice, for instance.
                </li>
                <li>• To appeal knowing that the batsman is not out.</li>
                <li>
                  • To advance towards an umpire in an aggressive manner when
                  appealing.
                </li>
                <li>
                  • To seek to distract an opponent either verbally or by
                  harassment with persistent clapping or unnecessary noise under
                  the guise of enthusiasm and motivation of one's own side.
                </li>
              </ul>
            </Text2>
            <Text2>
              <Heading2>VIOLENCE</Heading2>
              There is no place for any act of violence on the field of play.
              <HighlitedText>
                Player’s and umpire’s together set the tone for the conduct of a
                cricket match. Every player is expected to make an important
                contribution to this.
              </HighlitedText>
            </Text2>
            <ImgWrap>
              <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/ncl-logo.PNG?alt=media&token=6fe8663e-08b5-4ab4-9cba-3a42128b2e4c" />
              <Text3>Signature of Organizer</Text3>
            </ImgWrap>
          </ModalContent>
        </Modal>
        <FormWrapper>
          <HeadingContainer>
            <Line></Line>
            <Heading>Owner Registeration</Heading>
            <Line></Line>
          </HeadingContainer>
          <FormGroup onSubmit={handleSubmit}>
            <HeadingContainer>
              <Heading2>Team details</Heading2>
            </HeadingContainer>
            <FieldContainer>
              <Label>
                Team Name:
                <InputField
                  name="teamName"
                  value={formValues.teamName}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Company Name:
                <InputField
                  name="companyName"
                  value={formValues.companyName}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Nature of Business:
                <InputField
                  name="businessNature"
                  value={formValues.businessNature}
                  onChange={handleChange}
                  required
                />
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Upload Team logo
                <FileInput  onChange={handleImage} required />
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Enter Team's Instagram page:
                <FieldContainer>
                  <InstagramIcon state={isActive} />
                  <InputField
                    name="instaLink"
                    value={formValues.instaLink}
                    onChange={handleChange}
                    onFocus={() => setIsActive(false)}
                  />
                </FieldContainer>
              </Label>
            </FieldContainer>
            <HeadingContainer>
              <Heading2>Owner details</Heading2>
            </HeadingContainer>
            <FieldContainer>
              <Label>
                Owner Full Name:
                <InputField
                  name="ownerFullName"
                  value={formValues.ownerFullName}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Owner Contact Number:
                <InputField
                  name="ownerContactNumber"
                  value={formValues.ownerContactNumber}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Owner Email Id:
                <InputField
                  name="ownerEmailId"
                  value={formValues.ownerEmailId}
                  onChange={handleChange}
                />
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Permanent Address:
                <InputAreaField
                  name="ownerPermanentAddress"
                  value={formValues.ownerPermanentAddress}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Present Address:
                <InputAreaField
                  name="ownerPresentAddress"
                  value={formValues.ownerPresentAddress}
                  onChange={handleChange}
                />
              </Label>
            </FieldContainer>
            <HeadingContainer>
              <Heading2>Manager details</Heading2>
            </HeadingContainer>
            <FieldContainer>
              <Label>
                Manager Full Name:
                <InputField
                  name="managerFullName"
                  value={formValues.managerFullName}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Manager Contact No.:
                <InputField
                  name="managerContactNumber"
                  value={formValues.managerContactNumber}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Manager Email ID:
                <InputField
                  name="managerEmailId"
                  value={formValues.managerEmailId}
                  onChange={handleChange}
                  required
                />
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Manager Permanent address:
                <InputAreaField
                  name="managerPermanentAddress"
                  value={formValues.managerPermanentAddress}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Manager Present address:
                <InputAreaField
                  name="managerPresentAddress"
                  value={formValues.managerPresentAddress}
                  onChange={handleChange}
                  
                />
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="terms">
                <CheckBox
                  type="checkbox"
                  onChange={handleTermsCheck}
                  required
                ></CheckBox>
                I, therefore declare that the information provided above is true
                to the best of my knowledge, and I will obey all the{" "}
                <LinkText
                  onClick={() => {
                    setModalState(true);
                  }}
                >
                  Rules and Regulations{" "}
                </LinkText>
                of the organising committee.
              </Label>
            </FieldContainer>
            <SubmitBtn>Proceed to payment</SubmitBtn>
          </FormGroup>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default OwnerRegisterPage;
