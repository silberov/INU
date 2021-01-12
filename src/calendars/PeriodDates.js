import React, { useState } from 'react'
import '../App.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


export default function PeriodDates() {
    const [selectedDay, setSelectedDay] = useState();
    const [input, setInput] = useState(28);
  

 const handleDayChange = (day) => {
    setSelectedDay( day );
    console.log("selected day", day)
  }

    return (
      <div>
          <p>Select your cycle length. The average is 28 days.</p>
        <form>
        <input
          className="form"
          type="number"
          min="20"
          max="40"
          placeholder="enter number of days"
          value={input}
          onChange={(event) => {console.log("days", input);setInput(event.target.value)}}
        />        
        </form>
        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>Select the first day of your last period.</p>}
        <DayPickerInput onDayChange={handleDayChange} />
      </div>
    );
}


