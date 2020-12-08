import butt from './button1.png'
import styled from 'styled-components';
import colors from './utils/colors';
import { typography } from './utils/typography';

import Button from './componenets/Buttons/Buttons'
import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* <div>
        <img src={butt} alt={"jzdhf"}/>
      </div> */}
      
      <Button>Next</Button>
      <img src={butt} alt={"jzdhf"}/>
    </div>
  );
}







export default App;
