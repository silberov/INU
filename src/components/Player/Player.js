import styled from "styled-components";
import meditation from "../../images/meditation.png"

import { MainHeader , Header , SubHeader , P } from '../typography';
import PlayerControl from "./PlayerControl";

const CenterImg = styled.img`
    display: block;
    width: 295px;
    margin: 40px auto;
`

const PlayerMainWrap = styled.div`
    margin:35px;
`


function Player () {
    return (
        <PlayerMainWrap>
            <MainHeader modifiers={["center", "light"]}>Therapy · Day 1</MainHeader>
            <CenterImg src={meditation}/>
            <MainHeader modifiers={["center", "bold"]}>Be calm and relax</MainHeader>
            <PlayerControl />
        </PlayerMainWrap>
    );
}



export default Player