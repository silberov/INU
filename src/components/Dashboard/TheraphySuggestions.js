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
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column-reversed;
  align-items: flex-end;
  align-content: space-around;
`;

export default function TheraphySuggestions() {
  return (
    <DashboardDiv>
      <SubHeader>Therapy Suggestions</SubHeader>
      <ButtonDiv>
        <Button modifiers={["therapy"]}>Day 1</Button>
        <Button modifiers={["therapy"]}>Day 2</Button>
      </ButtonDiv>
    </DashboardDiv>
  );
}
