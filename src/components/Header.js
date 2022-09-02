import React, { useState }  from 'react';
import styled from "styled-components";
import {FiMenu} from "react-icons/fi";
import {CgSearch} from "react-icons/cg";
import {IoClose} from "react-icons/io5";
import {Colors,Devices} from "./Theme";
import Button from "./styled/Button";
import SearchBar from "./Header/SearchBar";

const HeaderE1 = styled.article``;

export default function Header() {
  return (
    <HeaderE1>
      <SearchBar />
    </HeaderE1>
  )
}
