import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { enqueueSnackbar } from "notistack";
import Cookies from 'js-cookie'
import useContactHook from "@/hook/contactHook/hook/contactHook";

export default function BasicDateCalendar() {
  const [value, setValue] = useState(null);
  const [openingHours, setOpeningHours] = useState({
    Monday: null,
    Tuesday: { start: "08:30", end: "18:30" },
    Wednesday: { start: "08:30", end: "18:30" },
    Thursday: { start: "08:30", end: "18:30" },
    Friday: { start: "08:30", end: "18:30" },
    Saturday: { start: "08:30", end: "12:30" },
    Sunday: null,
  });

  const { setDataFun  } = useContactHook()

  const isTimeDisabled = (time) => {
    if (!value) return true; // Disable all times until a date is selected
    const day = value.day();
    const currentTime = dayjs()
      .set("hour", time.hour())
      .set("minute", time.minute());
    const { start, end } = openingHours[dayjs().day(day).format("dddd")] || {};

    // If opening hours are not defined for the day, disable all times
    if (!start || !end) return true;

    const startTime = dayjs()
      .set("hour", parseInt(start.split(":")[0]))
      .set("minute", parseInt(start.split(":")[1]));
    const endTime = dayjs()
      .set("hour", parseInt(end.split(":")[0]))
      .set("minute", parseInt(end.split(":")[1]));

    // Special cases: 09:45 and 17:30 should not be disabled
    if (
      (currentTime.hour() === 9 && currentTime.minute() === 45)
    ) {
      return false;
    }

    // Prevent selection between 12:45 and 14:30
    const lunchStartTime = dayjs().set("hour", 12).set("minute", 45);
    const lunchEndTime = dayjs().set("hour", 14).set("minute", 30);
    if (currentTime.isBetween(lunchStartTime, lunchEndTime, null, "[]")) {
      return true;
    }

    return !currentTime.isBetween(startTime, endTime, null, "[]");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="date picker"
        value={value}
        onError={(err) => {
          if (err == "minTime") {
            return enqueueSnackbar("please select from available hours", {
              variant: "warning",
            });
          } else if (err == "shouldDisableTime-hours") {
            setDataFun({ dateKey: null });
            return enqueueSnackbar("monday and saterday is holiday");
          }
        }}
        onChange={(newValue) => {
          Cookies.set('day' , newValue.date())
          Cookies.set('month' , newValue.month() + 1)
          Cookies.set('hour' ,  newValue.hour())
          Cookies.set('minute' ,   newValue.minute())
          setValue(newValue);
        }}
        ampm={false}
        maxTime={dayjs().set("hour", 17).set("minute", 30)}
        minTime={dayjs().set("hour", 9).set("minute", 45)}
        shouldDisableTime={isTimeDisabled}
      />
    </LocalizationProvider>
  );
}
