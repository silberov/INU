import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import meditation from "../../images/meditation.png";
import goback from "../../images/goback.png";
import useSound from "use-sound";
//import sound from "./Cattle Decapitation - Apex Blasphemy.mp3";

import { MainHeader, Header, GoBack } from "../typography";
import PlayerControl from "./PlayerControl";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const CenterImg = styled.img`
  display: block;
  width: 295px;
  margin: 40px auto;
`;

const PlayerMainWrap = styled.div`
  max-width: 320px;
  margin: 72px auto 35px auto;
`;

function Player({ currentTherapy, trucks, onSkip }) {
  console.log("currentTherapy", currentTherapy);

  const [soundUrl, setSoundUrl] = useState(
    "http://mu5ic.ru/relax/sound-nature/evening-forest.mp3"
  );
  //const [isPlaying, setIsPlaying] = useState(true);
  //console.log(trucks[0] && trucks[currentTherapy].audio);
  //const audioEl = useRef(null);

  // console.log("sound", sound);

  //let soundUrl = "http://mu5ic.ru/relax/sound-nature/evening-forest.mp3";
  console.log("url", soundUrl);
  const [play, { stop, isPlaying }] = useSound(soundUrl);

  useEffect(() => {
    setSoundUrl(trucks[currentTherapy].audio);
  }, [currentTherapy]);

  return (
    <PlayerMainWrap>
      <Link to="/therapy">
        <GoBack src={goback} alt="back-arrow" />
      </Link>
      {/* <button active={isPlaying1} onClick={play} play={play} stop={stop}>
        test play
      </button> */}
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
      <PlayerControl
        play={play}
        pause={stop}
        isPlaying={isPlaying}
        onSkip={onSkip}
      />
      <Navbar selected={"selfcare"} />
    </PlayerMainWrap>
  );
}

export default Player;
