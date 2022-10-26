import React from "react";
import {
  MissionSectionContainer,
  MissionSectionWrapper,
  HeadingContainer,
  Line,
  Heading,
  Img1,Img2,Img3,
  Column,
  CollageWrapper,
  CollageContainer,
} from "./MissionSection.elements";

const MissionSection = () => {
  return (
    <>
      <MissionSectionContainer>
        <MissionSectionWrapper>
          <HeadingContainer>
            <Line />
            <Heading>#CLUBMISSION</Heading>
            <Line />
          </HeadingContainer>
          <CollageContainer>
            <CollageWrapper>
              <Column>
                <Img2
                  src={
                    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                  }
                />
                <Img3
                  src={
                    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                  }
                />
                <Img1
                  src={
                    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                  }
                />
              </Column>
              <Column>
                <Img1
                  src={
                    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                  }
                />
                <Img2
                  src={
                    "https://wallpaperaccess.com/full/1385607.jpg"
                  }
                />
                <Img3
                  src={
                    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                  }
                />
              </Column>
              <Column>
                <Img3
                  src={
                    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                  }
                />
                <Img2
                  src={
                    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                  }
                />
                <Img1
                
                  src={
                    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                  }
                />
              </Column>
            </CollageWrapper>
          </CollageContainer>
        </MissionSectionWrapper>
      </MissionSectionContainer>
    </>
  );
};

export default MissionSection;
