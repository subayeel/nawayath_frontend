import styled from "styled-components";

export const MessageContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MessageCardContainer = styled.div`
  width: 320px;
  height: 480px;
  margin: 10px;
`;
export const MessageCardWrapper = styled.div`
  display: flex;

  flex-direction: column;
`;
export const ImgWrap = styled.div`
  height: 240px;
  width: 100%;
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 7px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25), 0 7px 7px rgba(0, 0, 0, 0.22);
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
`;

export const Title = styled.h1`
  color: #2c2c2c;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  letter-spacing: 1.1px;
  text-align: center;
`;
export const Message = styled.p`
  color: #958da5;
  font-size: 16px;
  text-align: center;
`;
