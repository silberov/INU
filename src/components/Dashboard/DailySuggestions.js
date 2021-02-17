import { P, SubHeader } from "../typography";
import { DashboardDiv } from "./TheraphySuggestions";

export default function DailySuggestions({ suggestion }) {
  return (
    <DashboardDiv>
      <SubHeader modifiers={["purple"]}>Daily suggestions</SubHeader>
      <br></br>
      <P>{suggestion}</P>
    </DashboardDiv>
  );
}
