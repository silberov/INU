// import styled from 'styled-components';
// import colors from './utils/colors';

import "./App.css";
// import colors from './utils/colors';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register1";
import ForgotPassword from "./components/Login/ForgotPassword";
import Dashboard from "./components/Dashboard.js";
import ResetPassword from "./components/Login/ResetPassword"
import TypoTest from "./components/TypoTest";
import HomePage from "./components/HomePage/HomePage";
import Register2 from "./components/Login/Register2";
// import TypoTest from "./typo-test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route path="/user/register" component={Register} />
        </Switch>
        <Switch>
          <Route path="/user/register-2" component={Register2} />
        </Switch>
        <Switch>
          <Route path="/user/forgot-password" component={ForgotPassword} />
        </Switch>
        <Switch>
          <Route path="/user/dashboard" component={Dashboard} />
        </Switch>
        <Switch>
          <Route path="/user/reset-password" component={ResetPassword} />
        </Switch>
        <Switch>
          <Route path="/typotest" component={TypoTest} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
