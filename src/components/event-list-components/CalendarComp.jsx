import { Button } from "@mui/material";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { addEvent } from "../../store/calendarSlice";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarComp() {
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();
  const addDate = () =>
    dispatch(
      addEvent({
        title: "Conference",
        start: new Date(2022, 8, 20),
        end: new Date(2022, 8, 23),
      })
    );

  return (
    <div className="App">
      <h1 style={{ marginTop: 0, paddingTop: "5%" }}>Calendar</h1>
      <h2>Add New Event</h2>
      <Button onClick={() => addDate()}>add Event</Button>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}
