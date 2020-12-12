
// import styled from 'styled-components';
// import colors from './utils/colors';



import './App.css';
// import colors from './utils/colors';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Register from "./components/Register"
import ResetPassword from "./components/ResetPassword"

function App() {
  
  return (
    <div className="App">
      

      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Login} />
      </Switch>
      <Switch>
      <Route  path='/user/register' component={Register} />
     </Switch>
     <Switch>
      <Route  path='/user/reset-password' component={ResetPassword} />
     </Switch>
    </BrowserRouter>



      

      

    </div>
  );
}







export default App;
