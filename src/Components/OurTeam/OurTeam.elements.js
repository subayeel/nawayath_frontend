import styled from "styled-components";

export const OurTeamContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
export const OurTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 0 14px;
  }
`;
export const Line = styled.hr`
  flex: 3;
  height: 1px;
  width: 100%;
  background-color: #c8902f;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeadingContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 14px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  color: #c8902f;
  flex: 1;
  width: 100%;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.1px;
  text-align: center;
`;
export const Text2 = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: $ccc;
  margin: 3px 0;
`;

export const MemberCardContainer = styled.div`
  color: #2c2c2c;
  margin: 14px;
  padding: 14px;
  display: inline-block;
`;

export const MemberCardWrapper = styled.div`
  width: 280px;
  position: relative;
  height: 350px;
  margin: auto;
  background-color: #eeeeee;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const ImgWrap = styled.div`
  height: 280px;
  width: 100%;
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const TextWrap = styled.div`
  padding: 14px;
`;

export const CardHeading = styled.p`
  margin: 0;
  display: block;
  font-size: 18px;
  line-height: 1.1;
  
  font-weight: 700;
  
  text-decoration: none;
  color: #1b1a55;
  
  
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin: 7px 0;
  font-size: 14px;
  line-height: 18px;

  color: black;
`;
export const Author = styled.p`
  display: inline;
  font-size: 12px;
  margin-right: 8px;
  line-height: 14px;
  color: black;
`;
export const Position = styled.p`
  margin: 8px 0;
  display: inline;
  font-size: 18px;
  font-weight: 600;
  line-height: 14px;
  color: #1b1a55;
`;

export const HScrollWrapper = styled.div`
  overflow: auto;
  white-space: nowrap;

  > div {
    display: inline-block;
    margin: 0;
  }
`;
