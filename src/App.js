
// import styled from 'styled-components';
// import colors from './utils/colors';
import { MainHeader , Header , SubHeader , P } from './componenets/typography';

import Button from './componenets/Buttons/Buttons'
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
      

    </div>
  );
}







export default App;
