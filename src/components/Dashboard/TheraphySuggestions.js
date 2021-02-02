import React, { useState, useEffect } from "react";
import { SubHeader } from "../typography";
import { Button, Moon } from "../Buttons/Buttons";
import styled from "styled-components";
import colors from "../../utils/colors";
import { shadows, corners } from "../../utils/effects";

// Styled Components

export const DashboardDiv = styled.div`
  margin: auto 20px;
  padding: 24px;
  background-color: ${colors.white};
  /* margin-top: 25px auto;
  margin-bottom: 25px auto; */
  border-radius: ${corners.therapy};

  /* width: auto;
  height: auto; */
  filter: ${shadows.card};
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  /* padding: 15px; */
  /* flex-direction: column-reversed; */
  /* align-items: center; */

  /* margin: 15px;
  margin-top: 45px; */
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
