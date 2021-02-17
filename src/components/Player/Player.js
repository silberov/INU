import { useEffect } from "react";
import styled from "styled-components";
import meditation from "../../images/meditation.png";
import useSound from "use-sound";

import { MainHeader, Header } from "../typography";
import PlayerControl from "./PlayerControl";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { GoBack } from "../Buttons/Buttons";

const CenterImg = styled.img`
  display: block;
  width: 295px;
  margin: 40px auto;
`;

const PlayerMainWrap = styled.div`
  max-width: 320px;
  margin: 72px auto 35px auto;
`;

function Player({ therapyItem, onSkip }) {
  console.log("therpy", therapyItem);
  const [play, { stop, pause, isPlaying }] = useSound(therapyItem.audio, {
    onend: () => {
      onSkip();
    },
  });

  useEffect(() => {
    console.log("mount playing?", isPlaying);
    if (!isPlaying) {
      play();
    }
  }, []);

  useEffect(() => {
    return () => stop();
  }, []);

  return (
    <PlayerMainWrap>
      <Link to="/therapy">
        <GoBack />
      </Link>
      <MainHeader modifiers={["center", "light"]}>
        Therapy · {therapyItem.title}
      </MainHeader>
      <CenterImg src={meditation} />
      <Header modifiers={["center"]}>{therapyItem.title}</Header>
      <PlayerControl
        play={play}
        stop={stop}
        pause={pause}
        isPlaying={isPlaying}
        onSkip={onSkip}
      />
      <Navbar selected={"selfcare"} />
    </PlayerMainWrap>
  );
}

export default Player;
