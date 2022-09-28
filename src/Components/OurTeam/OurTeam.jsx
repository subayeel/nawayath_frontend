import React from "react";
import MemberCard from "./MemberCard";
import {
  OurTeamContainer,
  OurTeamWrapper,
  Line,
  Heading,
  Text2,
  HeadingContainer,
  HScrollWrapper,
} from "./OurTeam.elements";

import {
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
  member9,
} from "../../Data/memberData";

const OurTeam = () => {
  return (
    <>
      <OurTeamContainer>
        <OurTeamWrapper>
          <HeadingContainer>
            <Heading>Who are we?</Heading>
            <Line></Line>
          </HeadingContainer>

          <Text2>
            Established in March 2016, Nawayath Club is an association of
            youngsters from the Nawayath Community that have come together with
            their interest in sports and other activities. It endeavours to
            bring together the members of Nawayath community residing across the
            globe, besides solemnly holding the threads of Nawayath fabric
            intact.It is a Nawayath multisport and activities club. The
            objective of the club is to encourage the participation of the
            community in various sports and other activities with the goal to
            unite and strengthen the community.<br></br><br/> The Nawayath Club is
            orchestrated under the leadership of Mr. Mohammed Muddassir Ikkery.
            Being a former Indian International Athlete and having represented
            India around the globe, the sheer desire to see Nawayath community
            unite all around the world through sports, education and other
            activities, is what Nawayath Club strives for.
          </Text2>
          <br></br>
          <HeadingContainer>
            <Heading>Meet our Members </Heading>
          </HeadingContainer>

          <HScrollWrapper>
            <MemberCard {...member1} />
            <MemberCard {...member2} />
            <MemberCard {...member3} />
            <MemberCard {...member4} />
            <MemberCard {...member5} />
            <MemberCard {...member6} />
            <MemberCard {...member7} />
            <MemberCard {...member8} />
            <MemberCard {...member9} />
          </HScrollWrapper>

          {/* <HeadingContainer>
            <Heading>Meet our Members</Heading>
          </HeadingContainer>

          <HScrollWrapper>
            <MemberCard {...member1} />
            <MemberCard {...member1} />
            <MemberCard {...member1} />
            <MemberCard {...member1} />
            <MemberCard {...member1} />
            <MemberCard {...member1} />
            <MemberCard {...member1} />
          </HScrollWrapper> */}
        </OurTeamWrapper>
      </OurTeamContainer>
    </>
  );
};

export default OurTeam;