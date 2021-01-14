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


function Player (props) {
    return (
        <PlayerMainWrap>
            <MainHeader modifiers={["center", "light"]}>Therapy · {props.title}</MainHeader>
            <CenterImg src={meditation}/>
            <Header modifiers={["center"]}>{props.description}</Header>
            <PlayerControl />
        </PlayerMainWrap>
    );
}



export default Player