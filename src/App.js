// import styled from 'styled-components';
// import colors from './utils/colors';

import "./App.css";
// import colors from './utils/colors';
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import ForgotPassword from "./components/Login/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import ResetPassword from "./components/Login/ResetPassword"
=======
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import ResetPassword from "./components/ResetPassword"
import TypoTest from "./components/TypoTest";
// import TypoTest from "./typo-test";
>>>>>>> 80ce32d60068fd6e5dbc4a36bdd2486df42e42ff

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
        <Switch>
          <Route path="/user/register" component={Register} />
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
