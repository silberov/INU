import './App.css';
import MainCalendar from './calendars/MainCalendar';
import PeriodDates from './calendars/PeriodDates';

function App() {
  return (
    <div className="App">
     <PeriodDates />
     <MainCalendar />
    </div>
  );
}

export default App;
