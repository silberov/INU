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

import HomePage from "./components/HomePage/HomePage";
import Register2 from "./components/Login/Register2";
import TherapyContainer from "./components/Therapy/TherapyContainer";
import Player from "./components/Player/Player";
import { useEffect, useState } from "react";
import { therapyFiles } from "./Data/data";

function App() {
  // const [therapies, setTherapies] = useState([]);
  const [therapyData, setTherapyData] = useState([]);
  const [currentTherapy, setCurrentTherapy] = useState(1);
  const [nextTherapy, setNextTherapy] = useState(currentTherapy + 1);
  const [prevTherapy, setPrevTherapy] = useState(currentTherapy - 1);

  console.log("index", currentTherapy);
  console.log("prevTherapy", prevTherapy);
  console.log("NextTherapy", nextTherapy);

  //console.log(currentTherapy, nextTherapy,  prevTherapy, therapyData)
  const displayTherapy = [
    { title: "First Quarter", files: therapyData.slice(0, 7) },
    { title: "Second Quarter", files: therapyData.slice(7, 14) },
    { title: "Third Quarter", files: therapyData.slice(14, 21) },
    {
      title: "Forth Quarter",
      files: therapyData.slice(21, therapyData.length),
    },
  ];

  const getCurrentTherapy = (num) => {
    const index = Number(num);
    console.log("index", index);
    setCurrentTherapy(index);
    if (index === therapyData.length - 1) {
      setNextTherapy(0);
    } else {
      setNextTherapy(index + 1);
    }
    if (index - 1 < 0) {
      setPrevTherapy(therapyData.length - 1);
    } else {
      setPrevTherapy(index - 1);
    }
    console.log("prevTherapy", prevTherapy);
    console.log("currentTherapy", currentTherapy);
    console.log("NextTherapy", nextTherapy);
    console.log("therapyData", therapyData);
  };

  const skipToNext = () => {
    setPrevTherapy(currentTherapy);
    setCurrentTherapy(nextTherapy);
    if (nextTherapy + 1 === therapyData.length) {
      setNextTherapy(0);
    } else {
      setNextTherapy(currentTherapy + 1);
    }
    console.log("prevTherapy", prevTherapy);
    console.log("currentTherapy", currentTherapy);
    console.log("NextTherapy", nextTherapy);
  };

  const skipToPrev = () => {
    setNextTherapy(currentTherapy);
    setCurrentTherapy(prevTherapy);
    if (prevTherapy - 1 < 0) {
      setPrevTherapy(therapyData.length - 1);
    } else {
      setPrevTherapy(currentTherapy - 1);
    }
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
          <Route path="/reset-password" component={ResetPassword} />
        </Switch>
        <Switch>
          <Route exact path="/user/period" component={PeriodDates} />
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
                onTherapy={(n) => {
                  getCurrentTherapy(n);
                }}
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
                currentTherapy={currentTherapy}
                trucks={therapyData}
                onSkipNext={skipToNext}
                onSkipBack={skipToPrev}
              />
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
