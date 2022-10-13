import styled from "styled-components";
import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaThumbsUp,FaTimes
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #1b1a55;
  color: white;
`;
export const FooterWrapper = styled.div`
  max-width: 1140px;
  padding: 14px 0;
  margin-left: auto;
  margin-right: auto;
 
`;

export const Row = styled.div`
  display: flex;

  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 16px 0;
  }
`;

export const Column = styled.div`
  display: flex;
  margin: 5px 0;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;
export const CloseIcon = styled(FaTimes)`
  color: #1b1a55;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 2%;
  top: 5%;
  :hover {
    color: black;
    cursor: pointer;
  }
  @media screen and (max-width:768px) {
    width: 30px;
  height: 30px;
  }
`;
export const ModalContent = styled.div`
  display: flex;

  flex-direction: column;
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0;
`;
export const LinkText = styled(Link)`
  font-size: 14px;
  line-height: 10px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: #ccc;
    cursor: pointer;
  }
`;

export const Subtitle = styled.p`
  color: white;
  max-width: 800px;
  margin: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const FooterYoutubeIcon = styled(FaYoutubeSquare)`
  height: 40px;
  margin: 0 0 0 20px;
  width: 40px;
  color: white;
  &:hover {
    cursor: pointer;
    transition: 0.25s;
    transform: scale(1.1, 1.1);
  }
`;
export const FooterTwitterIcon = styled(FaTwitterSquare)`
  height: 40px;
  width: 40px;
  margin: 0 0 0 20px;
  color: white;
  &:hover {
    cursor: pointer;

    transition: 0.25s;
    transform: scale(1.1, 1.1);
  }
`;
export const FooterInstagramIcon = styled(FaInstagramSquare)`
  height: 40px;
  width: 40px;
  margin: 0 0 0 20px;
  color: white;
  &:hover {
    cursor: pointer;

    transition: 0.25s;
    transform: scale(1.1, 1.1);
  }
`;
export const FooterFacebookIcon = styled(FaFacebookSquare)`
  height: 40px;
  width: 40px;
  margin: 0 0 0 20px;
  color: white;
  &:hover {
    cursor: pointer;

    transition: 0.25s;
    transform: scale(1.1, 1.1);
  }
`;
export const FooterLikeIcon = styled(FaThumbsUp)`
  height: 40px;
  width: 40px;
  padding: 7px;
  color: ${(props) => (props.color ? props.color : "white")};

  &:hover {
    color: #e6e6e6;
    cursor: pointer;
    transition: 0.5s;

    transform: scale(1.1, 1.1);
  }
`;

export const EmptyContainer = styled.div`
  background-color: white;
  height: 36px;
  width: 80%;
  border-radius: 30px;
`;

export const Button = styled(Link)`
  padding: 14px 28px;
  color: #1b1a55;
  background-color: white;
  text-decoration: none;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin: 7px;
  border: none;
  &:hover {
    background-color: #ccc;
    
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;

export const ImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin: 7px;
`;
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Text2 = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: $ccc;
  margin: 3px 0;
`;

export const Text3 = styled.p`
  font-size: 16px;
  color: black;
  margin: 4px 0;
  text-align: ${({ start }) => (start ? "start" : "center")};
`;

export const HeadingContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 28px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Line = styled.hr`
  flex: 3;
  height: 1px;
  width: 100%;
  background-color: black;
`;

export const Heading = styled.h1`
  color: #1b1a55;
  flex: 3;
  width: 100%;
  font-size: 28px;
  font-weight: 800;
  margin: 0;
  letter-spacing: 0.1px;
  text-align: center;
`;

export const Heading2 = styled.h3`
  color: #1b1a55;
  flex: 1;

  width: 100%;
  font-size: 18px;
  font-weight: 600;
  margin: 7px 0;
  letter-spacing: 0.1px;
  text-align: center;
`;



export const HighlitedText = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #970000;
  text-align: center;
`;

export const ImgWrap = styled.div`
  height: 100px;
  width: 100px;
  margin: 14px auto;
  @media screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
  }
`;