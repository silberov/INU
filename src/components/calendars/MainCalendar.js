import React, { useState, useEffect } from "react";
import { predictPeriods } from "../../utils/period";
import { add, format, isSameDay, getDay } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import Button from "../Buttons/Buttons";
import {
  FormContainer,
  P,
  MainHeader,
  Header,
  LogoHomePage,
  BottomPattern,
} from "../typography";
import colors from "../../utils/colors";

export default function MainCalendar() {
  const [date, setDate] = useState(new Date());
  const [periodsArray, setPeriodsArray] = useState([]);
  const [nextPeriod, setNextPeriod] = useState([]);
  const [nextOvulation, setNextOvulation] = useState([]);
  const [input, setInput] = useState(28);
  const [periodTwo, setPeriodTwo] = useState([]);
  const [ovulationTwo, setOvulationTwo] = useState([]);

  useEffect(() => {
    setPeriodsArray(() => predictPeriods(new Date(date), 3, input));
  }, [date, input]);

  const handlePickDate = (selectedDate) => {
    setDate(selectedDate);
  };
  const modifiers = {
    highlight: (date) => {
      let allDates = periodsArray.reduce((dates, period) => {
        return [...dates, ...period.dates];
      }, []);
      return allDates.some((d) => isSameDay(d, date));
    },
    ovulation: (date) => {
      let allOvulation = periodsArray.reduce((dates, period) => {
        return [...dates, period.ovulation];
      }, []);
      return allOvulation.some((d) => isSameDay(d, date));
    },
  };

  const modifiersClassNames = {
    highlight: "-period",
    ovulation: "-ovulation",
  };

  return (
    <div>
      <FormContainer>
        <P color={colors.primary}>
          <div>
            <p>
              How many days does your cycle usually last? The average is 28
              days.
            </p>
            <form>
              <input
                className="form"
                type="number"
                min="20"
                max="40"
                placeholder="enter number of days"
                value={input}
                onChange={(event) => {
                  console.log("days", input);
                  setInput(event.target.value);
                }}
              />
            </form>
          </div>
          <div className="calendar">
            <p>
              Please select the first day of your last period.
              <br />
              Selected date:
              {date ? format(date, "dd MMM yyyy", { locale: enGB }) : "none"}.
            </p>
            <DatePickerCalendar
              date={date}
              onDateChange={(date) => handlePickDate(date)}
              modifiers={modifiers}
              modifiersClassNames={modifiersClassNames}
              locale={enGB}
              // months={1}
            />
          </div>
        </P>
      </FormContainer>
    </div>
  );
}
