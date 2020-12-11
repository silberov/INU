
// import styled from 'styled-components';
// import colors from './utils/colors';
import { H1 , H3 , P } from './utils/typography';

import Button from './components/Buttons/Buttons'
import './App.css';
import colors from './utils/colors';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login'


function App() {
  
  return (
    <div className="App">
      

      <BrowserRouter>
      <Switch>
      <Route path='/' component={Login} />
      </Switch>
    </BrowserRouter>



      

      

    </div>
  );
}







export default App;
