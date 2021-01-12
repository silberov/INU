import './App.css';
import MainCalendar from './calendars/MainCalendar';
import PeriodDates from './calendars/PeriodDates';

import {
  BrowserRouter as Router,
  Route, Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
     <Route exact path="/" component={PeriodDates}  />
     <Route exact path="/calendar" component={MainCalendar}  />
     </Router>
    </div>
  );
}

export default App;
