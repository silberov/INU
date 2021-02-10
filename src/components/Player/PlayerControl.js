import playImg from "../../images/player/play.png";
import pauseImg from "../../images/player/stop.png";
import skipForward from "../../images/player/skipright.png";
import skipBack from "../../images/player/skipleft.png";
import repeat from "../../images/player/trans.png";
import download from "../../images/player/download.png";
import styled from "styled-components";
import { useEffect } from "react";

const ControlWrap = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Main = styled.img`
  width: 35px;
  height: 40px;
  cursor: pointer;
`;
const Sub = styled.img`
  width: 20px;
  height: 20px;
`;

function PlayerControl({ isPlaying, play, pause, stop, onSkip }) {
  // useEffect(() => {
  //   console.log("mount playing?", isPlaying);
  //   if (!isPlaying) {
  //     console.log("play");
  //     play();
  //   }
  // }, []);
  console.log("re-playing?", isPlaying);
  const heandlePlayPause = (e) => {
    e.preventDefault();
    console.log("click", isPlaying);
    if (isPlaying) {
      //play();
      pause();
    } else {
      //pause();
      play();
    }
  };
  return (
    <ControlWrap>
      <Sub src={repeat} />
      <Sub
        src={skipBack}
        onClick={() => {
          stop();
          onSkip(false);
        }}
      />
      <Main
        onClick={(e) => heandlePlayPause(e)}
        src={isPlaying ? pauseImg : playImg}
        alt={isPlaying ? "pause" : "play"}
      />
      <Sub
        src={skipForward}
        onClick={() => {
          stop();
          onSkip();
        }}
      />
      <Sub src={download} />
    </ControlWrap>
  );
}

export default PlayerControl;
