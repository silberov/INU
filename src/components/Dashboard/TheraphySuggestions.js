import React, { useState, useEffect } from "react";
import { SubHeader } from "../typography";
import { Button, Moon } from "../Buttons/Buttons";
import styled from "styled-components";
import colors from "../../utils/colors";
import { shadows, corners } from "../../utils/effects";

// Styled Components

export const DashboardDiv = styled.div`
  margin: auto;
  padding: 25px;
  background-color: ${colors.white};
  margin: 0 20px;
  text-align: center;
  border-radius: ${corners.therapy};
  text-align: left;
  /* display: flex;
  align-items: flex-start; */
  filter: ${shadows.card};
  /* border: 0.5px solid #aaaaaa; */
  width: auto;
  height: auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column-reversed;
  align-items: center;
  align-content: space-around;
  margin: 15px;
  margin-top: 45px;
`;

export default function TheraphySuggestions() {
  return (
    <DashboardDiv>
      <SubHeader modifiers={["purple"]}>Therapy Suggestions</SubHeader>
      <ButtonDiv>
        <Button modifiers={["therapy"]}>Day 1</Button>
        <Button modifiers={["therapy"]}>Day 2</Button>
      </ButtonDiv>
    </DashboardDiv>
  );
}
