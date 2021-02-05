import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import meditation from "../../images/meditation.png";
import useSound from "use-sound";
//import sound from "../../../public/Cattle Decapitation - Apex Blasphemy.mp3";

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
  //const [isPlaying, setIsPlaying] = useState(true);
  console.log(trucks[0] && trucks[currentTherapy].audio);
  const audioEl = useRef(null);

  const soundUrl = "./Cattle Decapitation - Apex Blasphemy.mp3";
  console.log(soundUrl);
  const [play, { stop, isPlaying }] = useSound(soundUrl);
  //setIsPlaying((isPlaying) => !isPlaying);
  // useEffect(() => {
  //   if (!isPlaying) {
  //     audioEl.current.play();
  //     console.log("play", isPlaying);
  //   } else {
  //     audioEl.current.pause();
  //     console.log("stop", isPlaying);
  //   }
  // }, [isPlaying]);

  return (
    <PlayerMainWrap>
      <button active={isPlaying} play={play} stop={stop}>
        play
      </button>
      {/* <audio
        src={trucks[0] && trucks[currentTherapy].audio}
        ref={audioEl}
      ></audio> */}
      <MainHeader modifiers={["center", "light"]}>
        Therapy · {trucks[0] && trucks[currentTherapy].title}
      </MainHeader>
      <CenterImg src={meditation} />
      <Header modifiers={["center"]}>
        {trucks[0] && trucks[currentTherapy].title}
      </Header>
      {/* <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={(a) => setIsPlaying(a)}
        onSkip={(s) => onSkip(s)}
      /> */}
    </PlayerMainWrap>
  );
}

export default Player;
