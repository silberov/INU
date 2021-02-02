import play from "../../images/player/play.png";
import pause from "../../images/player/stop.png";
import skipForward from "../../images/player/skipright.png";
import skipBack from "../../images/player/skipleft.png";
import repeat from "../../images/player/trans.png";
import download from "../../images/player/download.png";
import styled from "styled-components";

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

function PlayerControl({ isPlaying, setIsPlaying, onSkip }) {
  //console.log(props);
  const heandlePlayPause = (e) => {
    e.preventDefault();
    console.log(isPlaying);
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      e.target.src = play;
      e.target.alt = "play";
    } else {
      e.target.src = pause;
      e.target.alt = "pause";
    }
    //e.target
  };
  return (
    <ControlWrap>
      <Sub src={repeat} />
      <Sub src={skipBack} onClick={() => onSkip(false)} />
      {/* <button onClick={heandlePlayPause}>hjsdbg</button> */}
      <Main onClick={heandlePlayPause} src={pause} alt={"pause"} />
      <Sub
        src={skipForward}
        onClick={() => {
          onSkip();
        }}
      />
      <Sub src={download} />
    </ControlWrap>
  );
}

export default PlayerControl;
