import React, { useState, useEffect } from "react";
import { predictPeriods } from "../../utils/period";
import { isSameDay } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { Link } from "react-router-dom";
import { MainHeader, P, Cross } from "../typography";
import colors from "../../utils/colors";
import cross from "../../images/cross.png";
import Navbar from "../Navbar/Navbar";
import useCrud from "../../hooks/useCrud";
import { DashboardWrap } from "../containers";

export default function MainCalendar() {
  const [date, setDate] = useState(new Date());
  const [periodsArray, setPeriodsArray] = useState([]);
  const [input, setInput] = useState(28);

  const { items } = useCrud("/cycle");

  useEffect(() => {
    const data = items;
    console.log("data", data);
    setInput(data?.cycle?.cycle_length);
    setDate(data?.cycle?.last_period);
  }, [items]);

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
    <DashboardWrap>
      <Link to="/user/dashboard">
        <Cross src={cross} alt="cross" />
      </Link>
      <div className="calendartitle">
        <MainHeader>Calendar</MainHeader>
      </div>
      <P color={colors.primary}>
        <div className="calendar" style={{ width: "352px", margin: "auto" }}>
          <DatePickerCalendar
            date={date}
            onDateChange={(date) => handlePickDate(date)}
            modifiers={modifiers}
            modifiersClassNames={modifiersClassNames}
            locale={enGB}
          />
        </div>
      </P>
      <Navbar />
    </DashboardWrap>
  );
}
