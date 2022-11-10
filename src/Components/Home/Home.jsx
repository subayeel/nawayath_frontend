import React from "react";
import InfoSection from "./InfoSection";
import MessageSection from "../MessageSection/MessageSection";

import Newsletter from "../Newsletter/Newsletter";
import { heroSectionData } from "../../Data/heroSectionData";
import { MainContainer, MainWrapper } from "../Global";

const Home = () => {
  return (
    <>
      <MainContainer>
        <MainWrapper style={{flexDirection:"column"}}>
          <InfoSection {...heroSectionData} />
          <MessageSection />
          <Newsletter />
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default Home;
