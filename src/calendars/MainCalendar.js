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

  const handlePickDate = (date) => {
    let output = [add(new Date(date), { days: 28 })];
    for (let i = 0; i < 6; i++) {
      output.push(add(new Date(output[i]), { days: 1 }));
    }
    setDate(date);
    setNextPeriod(output);
  };

  const handlePickOvulation = (date) => {
    let output = [add(new Date(date), { days: 14 })];
    for (let i = 0; i < 4; i++) {
      output.push(add(new Date(output[i]), { days: 1 }));
    }
    // setDate(date);
    setNextOvulation(output);
  };

  const modifiers = {
    highlight: (date) => {
      return nextPeriod.some((d) => {
        return isSameDay(d, date);
      });
    },
    ovulation: (date) => {
      return nextOvulation.some((d) => {
        return isSameDay(d, date);
      });
    }
  };

  const modifiersClassNames = {
    highlight: "-period",
    ovulation: "-ovulation"
  };

  return (
    <div className='calendar'>
      <p>
        Selected date:
        {date ? format(date, "dd MMM yyyy", { locale: enGB }) : "none"}.
      </p>
      <DatePickerCalendar
        date={date}
        onDateChange={handlePickOvulation, handlePickDate}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        locale={enGB}
      />
    </div>
  );
}