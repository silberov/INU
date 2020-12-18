
// import styled from 'styled-components';
// import colors from './utils/colors';
import { MainHeader , Header , SubHeader , P } from './componenets/typography';

import Button from './componenets/Buttons/Buttons'
import TherapyItem from "./componenets/Therapy/TherapyItem";
import './App.css';
import colors from './utils/colors';

function App() {
  
  return (
    <div className="App">
      <MainHeader>Add Your Profile <br/>Picture</MainHeader>
      <MainHeader>Create Your Profile</MainHeader>
      <Header wight="light">Aug 26 - Aug 31</Header>
      <SubHeader wight="light">Aug 26 - Aug 31</SubHeader>
      <P size="large">How intense was the pain <br/>during sex?</P>
      <P size="normal">How intense was the pain <br/>during sex?</P>
      <P size="small" color={colors.seconderyGray}>How intense was the pain <br/>during sex?</P>
      <P size="xsmall" color={colors.seconderyGray}>How intense was the pain <br/>during sex?</P>
      <Button>Next</Button>
      <Button modifiers={'disabled'}>Next</Button>
      <Button modifiers={['therapy']}><img src='./moon-icons/1.png'/>day 1</Button>
      <Button modifiers={['therapy', 'blue']}>day 2</Button>
      <Button modifiers={['therapy', 'orange']}>day 3</Button>
      <img src='./moon-icons/1.png' alt="dfsdf"/>
      <P modifiers={['xlarge', 'gray2']}>How intense was the pain <br/>during sex?</P>
      <P modifiers={['large','purple']}>How intense was the pain <br/>during sex?</P>
      <P>How intense was the pain <br/>during sex?</P>
      <P modifiers={['small', 'gray3']}>How intense was the pain <br/>during sex?</P>
      <P modifiers={'xsmall'}>How intense was the pain <br/>during sex?</P>
    </div>
  );
}







export default App;
