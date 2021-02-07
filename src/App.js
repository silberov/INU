import MainCalendar from "./components/calendars/MainCalendar";
import PeriodDates from "./components/calendars/PeriodDates";
import PeriodLength from "./components/calendars/PeriodLength";

// import styled from 'styled-components';
// import colors from './utils/colors';

import "./App.css";
// import colors from './utils/colors';
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register1";
import ForgotPassword from "./components/Login/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard.js";
import ResetPassword from "./components/Login/ResetPassword";

import HomePage from "./components/HomePage/HomePage";
import Register2 from "./components/Login/Register2";
import TherapyContainer from "./components/Therapy/TherapyContainer";
import Player from "./components/Player/Player";
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
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
        <Switch>
          <Route path="/user/dashboard" component={Dashboard} />
        </Switch>
        <Switch>
          <Route path="/reset-password" component={ResetPassword} />
        </Switch>
        <Switch>
          <Route exact path="/user/period" component={PeriodDates} />
        </Switch>
        <Switch>
          <Route exact path="/user/calendar" component={MainCalendar} />
        </Switch>
        <Switch>
          <Route exact path="/therapy" component={TherapyContainer} />
        </Switch>
        <Switch>
          <Route exact path="/therapy/:session" component={Player} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
