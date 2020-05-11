import React from "react";
import {
  InfoContainer,
  Avatar,
  StyledName,
  StyledTech,
  TextContainer,
} from "./style";
const InfoTop: React.FC = () => {
  return (
    <InfoContainer>
      <Avatar />
      <TextContainer>
        <StyledName>Jose Mari Valino</StyledName>
        <StyledTech>
          <svg
            width="181"
            height="20"
            viewBox="0 0 391 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0L310.5 21L391 27L15.5 36L0.5 0Z" fill="#F0BD0A" />
          </svg>

          <p style={{ position: "absolute", top: 4, left: 0 }}>
            IoT , GraphQL and JS
          </p>
        </StyledTech>
      </TextContainer>
    </InfoContainer>
  );
};

export default InfoTop;
