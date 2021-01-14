import { MainHeader , Header , SubHeader , P } from './typography';
import Button from './Buttons/Buttons'
import Therapy from "./Therapy/Therapy";
import "../App.css"
import TherapyContainer from './Therapy/TherapyContainer';




function TypoTest () {
    return(
    <>
        {/* <MainHeader>Add Your Profile <br/>Picture</MainHeader>
        <MainHeader>Create Your Profile</MainHeader>
        <Header modifiers={"bold"}>Aug 26 - Aug 31</Header>
        <SubHeader modifiers={"light"}>Aug 26 - Aug 31</SubHeader>
        <Button>Next</Button>
        <Button modifiers={'disabled'}>Next</Button>
        <Button modifiers={['therapy']}>day 1</Button>
        <Button modifiers={['therapy', 'blue']}>day 2</Button>
        <Button modifiers={['therapy', 'orange']}>day 3</Button>
        <P modifiers={['xlarge', 'gray2']}>How intense was the pain <br/>during sex?</P>
        <P modifiers={['large','purple']}>How intense was the pain <br/>during sex?</P>
        <P>How intense was the pain <br/>during sex?</P>
        <P modifiers={['small', 'gray3']}>How intense was the pain <br/>during sex?</P>
        <P modifiers={'xsmall'}>How intense was the pain <br/>during sex?</P> */}


        <TherapyContainer />
    </>
    );
}

export default TypoTest;
