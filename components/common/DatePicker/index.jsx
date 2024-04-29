import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers";

export default function BasicDateCalendar() {
  const [value, setValue] = useState(null); // Initialize value as null
  const [openingHours, setOpeningHours] = useState({
    Monday: null,
    Tuesday: { start: "08:30", end: "18:30" },
    Wednesday: { start: "08:30", end: "18:30" },
    Thursday: { start: "08:30", end: "18:30" },
    Friday: { start: "08:30", end: "18:30" },
    Saturday: { start: "08:30", end: "12:30" },
    Sunday: null,
  });

  useEffect(() => {
    if (value) {
      console.log(value.date(), value.hour());
    }
  }, [value]);

  const isTimeDisabled = (time) => {
    if (!value) return true; // Disable all times until a date is selected
    const day = value.day();
    const currentTime = dayjs().set('hour', time.hour()).set('minute', time.minute());
    const { start, end } = openingHours[dayjs().day(day).format("dddd")] || {};

    // If opening hours are not defined for the day, disable all times
    if (!start || !end) return true;

    const startTime = dayjs().set('hour', parseInt(start.split(':')[0])).set('minute', parseInt(start.split(':')[1]));
    const endTime = dayjs().set('hour', parseInt(end.split(':')[0])).set('minute', parseInt(end.split(':')[1]));

    // Special cases: 09:30 and 18:00 should not be disabled
    if (
      (currentTime.hour() === 9 && currentTime.minute() === 30) ||
      (currentTime.hour() === 18 && currentTime.minute() === 0)
    ) {
      return false;
    }

    return !currentTime.isBetween(startTime, endTime, null, '[]');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Controlled picker"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        minutesStep={null}
        hideSeconds={true}
        ampm={false} 
        maxTime={dayjs().set('hour', 18).set('minute', 0)}
        minTime={dayjs().set('hour', 9)}
        shouldDisableTime={isTimeDisabled}
      />
    </LocalizationProvider>
  );
}
