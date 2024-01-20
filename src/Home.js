import React from "react";
import styled from "styled-components";

const Home = () => {
  const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.bg};
    // height: 20px;
  `;

  return <Wrapper>Home</Wrapper>;
};

export default Home;
