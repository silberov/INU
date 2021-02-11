import styled from "styled-components";

import bg from "../images/bgs/bottompattern.png";

export const BottomPattWarp = styled.div`
  max-width: 420px;
  text-align: center;
  margin: auto;
  height: 100vh;
  background-image: url(${bg});
  background-position: center bottom -60px;
  background-repeat: no-repeat;
  background-size: 145%;
  overflow-y: hidden;
`;
