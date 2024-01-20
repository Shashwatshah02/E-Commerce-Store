import React from "react";
import styled from "styled-components";

const Services = () => {
  const Wrapper = styled.section``;

  return (
    <Wrapper>
      <div className="container">
        <div style={{ display: "flex" }}>
          <div style={{ width: "100%", backgroundColor: "red" }}>Hello</div>
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <div>Whats up</div>
            <div>I'mm good</div>
          </div>
          <div style={{ width: "100%", backgroundColor: "red" }}>Hello</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
