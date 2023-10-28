import React from "react";
import { Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function DateTime() {
  const [pickupDate, setPickupDate] = React.useState(null);
  const [pickupTime, setPickupTime] = React.useState(null);
  function handleClick() {
    console.log(pickupDate);
  }
  function handleTime() {
    console.log(pickupTime);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="body1">Pickup</Typography>
      <Typography variant="body1" mt={2} onClick={handleClick}>
        Provider will arrive within half an hour of your selected time. Eg., if
        you select 11 AM, provider will target to arrive between 10:30 - 11:30
        AM.
      </Typography>
      <DemoContainer components={["DatePicker", "TimePicker"]}>
        <DatePicker
          label="Date"
          value={pickupDate}
          onChange={(newDate) => setPickupDate(newDate)}
        />
        <TimePicker
          label="Time"
          value={pickupTime}
          onChange={(newTime) => setPickupTime(newTime)}
        />
      </DemoContainer>
      <Typography variant="body2" mt={2} onClick={handleTime}>
        Need help? We are here for you! You can chat with us here.
      </Typography>
    </LocalizationProvider>
  );
}
