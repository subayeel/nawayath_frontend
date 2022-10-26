import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Button,
} from "./InfoSection.elements";



const InfoSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  desc,
  buttonLabel,
  btnLink,
  img,
  alt,
  primary,
  dark,
  btnIconImg,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{desc}</Subtitle>
                <BtnWrap>
                  <Button
                    to={btnLink}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    <img
                      className="blink"
                      style={{
                        margin: " 0px 14px 0 0",
                        height: "16px",
                        width: "20px",
                      }}
                      src={btnIconImg}
                    />

                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap imgStart={imgStart}>
                <Img loading="lazy" src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
