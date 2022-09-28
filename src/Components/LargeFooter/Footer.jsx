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
            <Img src="https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/NF%20LOGO%201.png?alt=media&token=1545fb2d-6bbb-4e2f-8eb0-1b7ec1069819" />
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
            Copyright © 2022 Nawayath Foundation
            <br /> All Rights Reserved.
          </Subtitle>
        </TextWrap>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
