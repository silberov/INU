import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import meditation from "../../images/meditation.png";

import { MainHeader, Header } from "../typography";
import PlayerControl from "./PlayerControl";

const CenterImg = styled.img`
  display: block;
  width: 295px;
  margin: 40px auto;
`;

const PlayerMainWrap = styled.div`
  margin: 35px;
`;

function Player({ currentTherapy, trucks, onSkip }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioEl = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  console.log();

  return (
    <PlayerMainWrap>
      <audio
        src={trucks[0] && trucks[currentTherapy].audio}
        ref={audioEl}
      ></audio>
      <MainHeader modifiers={["center", "light"]}>
        Therapy · {trucks[0] && trucks[currentTherapy].title}
      </MainHeader>
      <CenterImg src={meditation} />
      <Header modifiers={["center"]}>
        {trucks[0] && trucks[currentTherapy].title}
      </Header>
      <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onSkip={(s) => onSkip(s)}
      />
    </PlayerMainWrap>
  );
}

export default Player;
