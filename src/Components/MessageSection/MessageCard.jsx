import React from "react";
import {
  MessageCardContainer,
  MessageCardWrapper,
  ImgWrap,
  Img,
  TextWrap,
  Title,
  Message,
} from "./MessageSection.elements";

const MessageCard = ({title,message,imgUrl}) => {
  return (
    <>
      <MessageCardContainer>
        <MessageCardWrapper>
          <ImgWrap>
            <Img  loading="lazy" src={imgUrl} />
          </ImgWrap>
          <TextWrap>
            <Title>{title}</Title>
            <Message>{message}</Message>
          </TextWrap>
        </MessageCardWrapper>
      </MessageCardContainer>
    </>
  );
};

export default MessageCard;
