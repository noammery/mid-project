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
import "./calendar.css";

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
  const addDate = () => {
    dispatch(
      addEvent({
        title: "Conference",
        start: new Date(2022, 8, 20),
        end: new Date(2022, 8, 23),
      })
    );
    console.log(new Date(2022, 8, 20).toJSON());
  };
  return (
    <div className="Calendar">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ padding: "5%", paddingTop: "10%", height: 600 }}
      />
      <Button onClick={addDate}>add event test</Button>
    </div>
  );
}
