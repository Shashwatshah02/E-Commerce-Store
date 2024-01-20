import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Header = () => {
  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
      height: 5rem;
    }
  `;

  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="Logo" />
      </NavLink>
      <Nav></Nav>
    </MainHeader>
  );
};

export default Header;
