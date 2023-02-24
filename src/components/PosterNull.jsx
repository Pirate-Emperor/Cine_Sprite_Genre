/*
Page: PosterNull
Movies without a poster show the logo instead of showing the poster.
Created by Sunil Park
*/

import React from "react";
import styled from "styled-components";
import logo from "../assets/main_logo.png";

const StyledPosterNull = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.dark} !important;

  h3 {
    color: ${({ theme }) => theme.colors.constLight} !important;
    text-align: center;
  }

  > img {
    position: relative !important;
    width: 5rem !important;
    height: 5rem !important;
  }
`;

const PosterNull = ({ title }) => {
  return (
    <StyledPosterNull>
      <h3>{title}</h3>
      <img src={logo} alt="CS_logo" />
    </StyledPosterNull>
  );
};

export default PosterNull;
