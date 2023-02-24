/*
Page: Search Page
This page is where users see the results of the movies they searched for.
Created by Sunil Park
*/

import React from "react";
import Aside from "./Aside";
import Main from "./Main";
import { StyledPage } from "../../components/styles/Page.styled";

const Search = () => {
  return (
    <StyledPage>
      <Aside />
      <Main />
    </StyledPage>
  );
};

export default Search;
