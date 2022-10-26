import React, { useState } from "react";
import Modal from "react-modal";
import {
  FooterInstagramIcon,
  FooterFacebookIcon,
  FooterYoutubeIcon,
  FooterContainer,
  FooterWrapper,
  FooterTwitterIcon,
  Column,
  CloseIcon,
  Row,
  Img,
  LinkText,
  TextWrap,
  Subtitle,
  EmptyContainer,
  Button,
  Text2,
  Text3,
  Heading,
  Heading2,
  Line,
  HeadingContainer,
  ImgWrap,
  ModalContent,
  HighlitedText,
  ImgWrapper,
} from "../LargeFooter/Footer.elements";

// import { Button } from "../ButtonElement";

function Footer() {
  const [likeState, setLike] = useState(false);
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
      width: "70%",
      height: "70%",
      position: "absolute",

      left: "50%",
      top: "55%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <FooterContainer>
      <Modal
        style={customStyles}
        onRequestClose={closeModal}
        handleState={setModalState}
        isOpen={modalState}
      >
        <CloseIcon onClick={closeModal} />
        <ModalContent>
          <ImgWrap>
            <Img
              loading="lazy"
              src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/ncl-logo.PNG?alt=media&token=6fe8663e-08b5-4ab4-9cba-3a42128b2e4c"
            />
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
            There are some laws which place the responsibility for the player’s
            conduct. The spirit of the game involves RESPECT for your
            opponent’s, your official’s, your own team & The spectators.
          </HighlitedText>
          <Heading2>IT IS AGAINST THE SPIRIT OF THE GAME:</Heading2>
          <Text2>
            <ol>
              <li>
                To dispute an umpire's decision by word, action or gesture.
              </li>
              <li>To direct abusive language towards an opponent or umpire.</li>
              <li>
                To indulge in cheating or any sharp practice, for instance.
              </li>
              <li> To appeal knowing that the batsman is not out.</li>
              <li>
                To advance towards an umpire in an aggressive manner when
                appealing.
              </li>
              <li>
                To seek to distract an opponent either verbally or by harassment
                with persistent clapping or unnecessary noise under the guise of
                enthusiasm and motivation of one's own side.
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
                Point or gesture towards the pavilion, or behave aggressively or
                derisively towards either batsman, upon the dismissal of a
                batsman.
              </li>
              <li>
                Threaten to assault another player, umpire, team official or
                spectator. Engage in inappropriate & Deliberate physical contact
                with other players, umpires or officials in the course of play.
              </li>
              <li>
                Deliberately & maliciously distract or obstruct another players
                or officials on the field of play.
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
                It is advisable for all players to take safety measures on their
                own for any injuries during the tournament, as Nawayath Club
                will not be responsible in any way.
              </li>
            </ol>
          </Text2>
          <HighlitedText>
            Player’s and umpire have together set the tone for the conduct of a
            cricket match. Every player is expected to make an important
            contribution to this.
          </HighlitedText>
          <ImgWrap>
            <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/ncl-logo.PNG?alt=media&token=6fe8663e-08b5-4ab4-9cba-3a42128b2e4c" />
            <Text3>Signature of Organizer</Text3>
          </ImgWrap>
        </ModalContent>
      </Modal>
      <FooterWrapper>
        <Row justify="space-between">
          <Column>
            <Button to="/">Home</Button>
            <Button to="/ourteam">Our Team</Button>
          </Column>

          <Column>
            <TextWrap>
              <LinkText to="/ourteam">Contact Us</LinkText>&nbsp;|&nbsp;
              <LinkText onClick={openModal}>Terms & Conditions</LinkText>
            </TextWrap>
          </Column>
        </Row>

        <Row justify="center">
          <ImgWrapper>
            <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/nc%20logo.png?alt=media&token=ba54c1fc-7bf8-44ba-bb93-da422b730434" />
          </ImgWrapper>
        </Row>
        <Row justify="center">
          <div>
            <FooterFacebookIcon />
            <FooterInstagramIcon />
            <FooterTwitterIcon />
            <FooterYoutubeIcon />
          </div>
        </Row>

        <TextWrap>
          <Subtitle>
            Copyright © 2022 Nawayath Club
            <br /> All Rights Reserved.
          </Subtitle>
        </TextWrap>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
