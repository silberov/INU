import MainCalendar from "./components/calendars/MainCalendar";
import PeriodDates from "./components/calendars/PeriodDates";
import PeriodLength from "./components/calendars/PeriodLength";

import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register1";
import ForgotPassword from "./components/Login/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard.js";
import ResetPassword from "./components/Login/ResetPassword";
import UpdatePeriod from "./components/calendars/UpdatePeriod";

import HomePage from "./components/HomePage/HomePage";
import Register2 from "./components/Login/Register2";
import TherapyContainer from "./components/Therapy/TherapyContainer";
import Player from "./components/Player/Player";
import { useEffect, useState } from "react";
import { therapyFiles } from "./Data/data";

function App() {
  const [therapyData, setTherapyData] = useState([]);
  const [currentTherapy, setCurrentTherapy] = useState(0);

  const displayTherapy = [
    { title: "First Quarter", files: therapyData.slice(0, 7) },
    { title: "Second Quarter", files: therapyData.slice(7, 14) },
    { title: "Third Quarter", files: therapyData.slice(14, 21) },
    {
      title: "Forth Quarter",
      files: therapyData.slice(21, therapyData.length),
    },
  ];

  const skip = (forward = true) => {
    setCurrentTherapy(() => {
      let temp = currentTherapy;
      if (forward) {
        if (temp + 1 > therapyData.length - 1) {
          return 0;
        } else {
          return temp + 1;
        }
      } else {
        if (temp - 1 < 0) {
          return therapyData.length - 1;
        } else {
          return temp - 1;
        }
      }
    });
  };

  useEffect(() => {
    setTherapyData(therapyFiles);
  }, []);

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
          <Route path="/user/updateperiod" component={UpdatePeriod} />
        </Switch>
        <Switch>
          <Route path="/reset-password" component={ResetPassword} />
        </Switch>
        <Switch>
          <Route exact path="/user/cycle" render={() => <PeriodLength />} />
        </Switch>
        <Switch>
          <Route exact path="/user/period" render={() => <PeriodDates />} />
        </Switch>
        <Switch>
          <Route exact path="/user/calendar" component={MainCalendar} />
        </Switch>
        <Switch>
          <Route
            exact
            path="/therapy"
            render={() => (
              <TherapyContainer
                therapyData={displayTherapy}
                setCurrentTherapy={setCurrentTherapy}
              />
            )}
          ></Route>
        </Switch>
        <Switch>
          <Route
            exact
            path="/player"
            render={() => (
              <Player
                therapyItem={therapyFiles[currentTherapy]}
                onSkip={skip}
              />
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
