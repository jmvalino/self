import React from "react";
import { StyledTitle, StyledBio, BioContainer } from "./style";
const AboutMe: React.FC = () => {
  return (
    <BioContainer>
      <StyledTitle>About Me</StyledTitle>
      <StyledBio>
        {`I’m currently doing Research & Development  stuffs in a company based in Manila, I work in areas of Internet of Things as well as modern web technologies such as GraphQL.`}
      </StyledBio>
    </BioContainer>
  );
};

export default AboutMe;
