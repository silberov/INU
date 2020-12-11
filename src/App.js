
// import styled from 'styled-components';
// import colors from './utils/colors';
import { H1 , H3 , P } from './utils/typography';

import Button from './componenets/Buttons/Buttons'
import './App.css';
import colors from './utils/colors';

function App() {
  
  return (
    <div className="App">
      
      
      <H1>Add Your Profile <br/>Picture</H1>
      <H1>Create Your Profile</H1>
      <H3 wight="light">Aug 26 - Aug 31</H3>
      <P size="large">How intense was the pain <br/>during sex?</P>
      <P size="normal">How intense was the pain <br/>during sex?</P>
      <P size="small" color={colors.seconderyGray}>How intense was the pain <br/>during sex?</P>
      <P size="xsmall" color={colors.seconderyGray}>How intense was the pain <br/>during sex?</P>
      <Button>Next</Button>
      

    </div>
  );
}







export default App;
