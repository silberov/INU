import React, { useState } from 'react'
import { add, format, isSameDay } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import '../App.css'


export default function MainCalendar() {
  const [date, setDate] = useState();
  const [nextPeriod, setNextPeriod] = useState([]);
  const [nextOvulation, setNextOvulation] = useState([]);
  const [input, setInput] = useState([]);
  const [periodTwo, setPeriodTwo] = useState([]);
  const [ovulationTwo, setOvulationTwo] = useState([]);


  const handlePickDate = (date) => {
    let output = [add(new Date(date), { days: input-1 })];
    for (let i = 0; i < 6; i++) {
      output.push(add(new Date(output[i]), { days: 1 }));
    }
    setDate(date);
    setNextPeriod(output);
    handlePickOvulation(date);
    handlePickDateTwo();
    console.log("output", output)
  };

  const handlePickOvulation = (date) => {
    let output = [add(new Date(date), { days: (input/3) })];
    for (let i = 0; i < 4; i++) {
      output.push(add(new Date(output[i]), { days: 1 }));
    }
    setNextOvulation(output);

  };

  // console.log("month two", monthTwo)


  const handlePickDateTwo = () => {
    let monthTwo = nextPeriod[0]
    console.log("month 2", monthTwo)
    let output = [add(new Date(monthTwo), { days: input-1 })];
    for (let i = 0; i < 6; i++) {
      output.push(add(new Date(output[i]), { days: 1 }));
      console.log("output 2", output)
      setPeriodTwo(output)
      handlePickOvulationTwo()
    }};

    const handlePickOvulationTwo = () => {
      let monthTwo = nextPeriod[0]
      let output = [add(new Date(monthTwo), { days: (input/3) })];
      for (let i = 0; i < 4; i++) {
        output.push(add(new Date(output[i]), { days: 1 }));
      }
      setOvulationTwo(output);  
    };




  const modifiers = {
    highlight: (date) => {
      return nextPeriod.some((d) => {
        return isSameDay(d, date);
      });
    },
    highlight2: (monthTwo) => {
      return periodTwo.some((d) => {
        return isSameDay(d, monthTwo);
      });
    },
    ovulation: (date) => {
      return nextOvulation.some((d) => {
        return isSameDay(d, date);
      });
    },
    ovulation2: (monthTwo) => {
      return ovulationTwo.some((d) => {
        return isSameDay(d, monthTwo);
      });
    }
  };

  const modifiersClassNames = {
    highlight: "-period",
    highlight2: "-period2",
    ovulation: "-ovulation",
    ovulation2: "-ovulation2"
  };

  console.log(nextPeriod);
  console.log("next period 0", nextPeriod[0])
  

  // const handleFormSubmit = (event) => {
  //   console.log(input)
  // }

  return (
    <div>
    <div>
      <p>How many days does your cycle usually last? The average is 28 days.</p>
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
         {/* <input type="submit" disabled={!input ? true : false} value="submit" class="button" /> */}
        </form></div>
    <div className='calendar'>
      <p>
        Please select the first day of your last period. 
        <br />
        Selected date: 
        {date ? format(date, "dd MMM yyyy", { locale: enGB }) : "none"}.
      </p>
      <DatePickerCalendar
        date={date}
        onDateChange={handlePickDate}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        locale={enGB}
        months={2}
      />
    </div></div>
  )
}