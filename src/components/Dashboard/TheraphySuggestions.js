import React, { useState, useEffect } from "react";
import { SubHeader } from "../typography";
import { Button, Moon } from "../Buttons/Buttons";
import styled from "styled-components";
import colors from "../../utils/colors";
import { shadows, corners } from "../../utils/effects";

// Styled Components

export const DashboardDiv = styled.div`
  margin: 0 auto 25px 0;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: ${corners.therapy};
  filter: ${shadows.card};
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function TheraphySuggestions() {
  return (
    <DashboardDiv>
      <SubHeader margin={"0 auto 20px 0"} modifiers={["purple"]}>
        Therapy Suggestions
      </SubHeader>
      <ButtonDiv>
        <Button modifiers={["therapy"]}>Day1</Button>
        <Button modifiers={["therapy"]}>Day1</Button>
        {/* <Button modifiers={["therapy"]}>Day 1</Button>
        <Button modifiers={["therapy"]}>Day 2</Button> */}
      </ButtonDiv>
    </DashboardDiv>
  );
}
