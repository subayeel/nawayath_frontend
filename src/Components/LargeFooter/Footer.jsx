import React, { useState } from "react";
import {
  FooterInstagramIcon,
  FooterFacebookIcon,
  FooterYoutubeIcon,
  FooterContainer,
  FooterWrapper,
  FooterTwitterIcon,
  Column,
  FooterLikeIcon,
  Row,
  Img,
  LinkText,
  TextWrap,
  Subtitle,
  EmptyContainer,
  Button,
  ImgWrapper,
} from "../LargeFooter/Footer.elements";

// import { Button } from "../ButtonElement";

function Footer() {
  const [likeState, setLike] = useState(false);
  return (
    <FooterContainer>
      <FooterWrapper>
        <Row justify="space-between">
          <Column>
            <Button to="/"  >
              Home
            </Button>
            <Button to="/ourteam" >
              Our Team
            </Button>
           
          </Column>

          <Column>
            <TextWrap>
              

              <LinkText to="/register-option">Register for NCL-V-2022</LinkText>
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
