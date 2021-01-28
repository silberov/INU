import React, { useState, useEffect } from "react";
import { SubHeader } from "../typography";
import { Button, Moon } from "../Buttons/Buttons";
import styled from "styled-components";

// Styled Components

export const DashboardDiv = styled.div`
  margin: auto;
  padding: 16px;
  background-color: "#ffffff";
  margin-top: 25px auto;
  margin-bottom: 25px auto;
  text-align: center;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  box-shadow: -1em 0 0.2em #aaaaaa;
  border: 0.5px solid #aaaaaa;
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
