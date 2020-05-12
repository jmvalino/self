import React from "react";
import InfoTop from "../components/InfoTop";
import AboutMe from "../components/AboutMe";
const Home: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <InfoTop />
      <AboutMe />
    </div>
  );
};

export default Home;
