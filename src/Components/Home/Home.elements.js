import styled from "styled-components";

export const IFrame = styled.iframe`
  width: 100%;
  height: 480px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 320px;
  }
`;
