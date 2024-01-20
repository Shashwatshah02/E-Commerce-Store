import React from "react";
import styled from "styled-components";
import HeroComponent from "./components/HeroComponent";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  return (
    <>
      <HeroComponent data="Thappa Store"></HeroComponent>
      <Services></Services>
      <Trusted></Trusted>
    </>
  );
};

export default Home;
