

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faMountainSun } from "@fortawesome/free-solid-svg-icons";


import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavbarLink,
  StyledNavbarFeature,
  StyledDarkMode,
} from "./styles/Navbar.styled";
import logo from "../assets/main_logo.png";

import Input from "./Input";
const head = "/Cine_Sprite_Genre"
const links = [
  {
    path: "/",
    label: "Genres",
    exect: "true",
  },
  {
    path: "/info1",
    label: "Analyzer",
    exect: "true",
  },
  {
    path: "/info2",
    label: "Dashboard",
    exect: "true",
  },
  {
    path: "/search",
    label: "Search",
    exect: "true",
  },
  // {
  //   path: "/search",
  //   label: "Search",
  //   exect: "false",
  // },
  // {
  //   path: "/info",
  //   label: "Info",
  //   exect: "false",
  // },
];

const Navbar = ({ colorMode, setColorMode }) => {
  // darkmode trigger
  // bool: true = light mode, false = dark mode
  const modeClickHandler = () => {
    setColorMode(!colorMode);
  };
  return (
    <header>
      <StyledNavbar>
        <Link to={`/`}>
        {/* <ReactRoundedImage image={logo}
        imageWidth="50"
        imageHeight="50"
        roundedSize="0"/> */}
          <img src={logo} alt="CM_logo" />
        </Link>
        <StyledNavbarLink>
          {links.map(({ path, label, exact }) => {
            return (
              <li key={label}>
                <NavLink
                  exact={exact}
                  to={head+path}
                  className={({ isActive }) => (isActive ? "isActived" : "")}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </StyledNavbarLink>
        <StyledNavbarFeature>
          <Input />
          <StyledDarkMode
            onClick={modeClickHandler}
            className={colorMode ? "lightMode" : "darkMode"}
          >
            <span></span>
            <p>
              <FontAwesomeIcon icon={faMountainSun} />
            </p>
            <p>
              <FontAwesomeIcon icon={faMoon} />
            </p>
          </StyledDarkMode>
        </StyledNavbarFeature>
      </StyledNavbar>
    </header>
  );
};

export default Navbar;
