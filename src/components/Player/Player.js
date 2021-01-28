import { useState } from "react";
import styled from "styled-components";
import meditation from "../../images/meditation.png"

import { MainHeader , Header } from '../typography';
import PlayerControl from "./PlayerControl";

const CenterImg = styled.img`
    display: block;
    width: 295px;
    margin: 40px auto;
`

const PlayerMainWrap = styled.div`
    margin:35px;
`


function Player (props) {
    const [isPlaying, setIsPlaying] = useState(false);

    console.log(props)

    return (
        <PlayerMainWrap>
            <audio src={props.trucks.audio} ></audio>
            <MainHeader modifiers={["center", "light"]}>Therapy · {props.trucks[0] && props.trucks[props.currentTherapy].title}</MainHeader>
            <CenterImg src={meditation}/>
            <Header modifiers={["center"]}>{props.trucks[0] && props.trucks[props.currentTherapy].title}</Header>
            <PlayerControl />
        </PlayerMainWrap>
    );
}



export default Player;