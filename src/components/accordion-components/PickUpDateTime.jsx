import React from "react";
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Hidden,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MobileDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import moment from "moment";

export default function DateTime({ formData, updateFormData, onContinue }) {
  // console.log("PickUpDateTime.jsx rendered");

  const [pickupDate, setPickupDate] = React.useState(null);
  const [pickupTime, setPickupTime] = React.useState("");

  React.useEffect(() => {
    console.log("PickupDateTime renedered");

    const pickupDateObject = moment(pickupDate); // Parse the string to a Date object

    if (pickupDateObject.isValid()) {
      const formattedPickupDate = pickupDateObject.format("ddd, MMM D, YYYY");

      updateFormData((prevFormData) => {
        // Update date in formData
        return {
          ...prevFormData,
          data: {
            ...prevFormData.data,
            price_quote: {
              ...prevFormData.data.price_quote,
              date_time: {
                ...prevFormData.data.price_quote.date_time,
                pickup_date: formattedPickupDate,
              },
            },
          },
        };
      });
    } else {
      console.error("Invalid date string:", pickupDate);
    }
  }, [pickupDate]);
  React.useEffect(() => {
    // Update time in formData
    const newData = {
      ...formData,
      data: {
        ...formData.data,
        price_quote: {
          ...formData.data.price_quote,
          date_time: {
            ...formData.data.price_quote.date_time,
            pickup_time: pickupTime,
          },
        },
      },
    };
    updateFormData(newData);
  }, [pickupTime]);

  const handleDateChange = (newDate) => {
    setPickupDate(newDate);
    setPickupTime(""); // Reset the time when the date changes
  };

  const handlePickupTimeChange = (event) => {
    setPickupTime(event.target.value);
  };

  const dateTimePQ = formData.data.price_quote.date_time;
  React.useEffect(() => {
    const updatedFormData = {
      ...formData,
      data: {
        ...formData.data,
        form_disabled: {
          ...formData.data.form_disabled,
          tasks:
            (dateTimePQ.pickup_date && dateTimePQ.pickup_time) !== ""
              ? false
              : true, //
        },
      },
    };
    updateFormData(updatedFormData);
  }, [dateTimePQ]);

  const handleContinueClick = () => {
    !formData.data.form_disabled.tasks && onContinue();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="subtitle1">Pickup</Typography>
      <Typography variant="body1" my={2}>
        Provider will arrive within half an hour of your selected time. Eg., if
        you select 11 AM, provider will target to arrive between 10:30 - 11:30
        AM.
      </Typography>
      <DemoContainer components={["DatePicker", "TimePicker"]}>
        <MobileDatePicker
          label="Date"
          value={pickupDate}
          onChange={handleDateChange}
          autoFocus={true}
          closeOnSelect={true}
          disablePast
        />
        <Box sx={{ m: 1, minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select-pickup-time-label">Time</InputLabel>
            <Select
              labelId="select-pickup-time-label"
              id="select-pickup-time"
              value={pickupTime}
              label="Time"
              placeholder="Time"
              onChange={handlePickupTimeChange}
              // disabled = {}
            >
              <MenuItem value={"8:00 AM"}>08:00 AM</MenuItem>
              <MenuItem value={"9:00 AM"}>09:00 AM</MenuItem>
              <MenuItem value={"10:00 AM"}>10:00 AM</MenuItem>
              <MenuItem value={"11:00 AM"}>11:00 AM</MenuItem>
              <MenuItem value={"12:00 PM"}>12:00 PM</MenuItem>
              <MenuItem value={"1:00 PM"}>01:00 PM</MenuItem>
              <MenuItem value={"2:00 PM"}>02:00 PM</MenuItem>
              <MenuItem value={"3:00 PM"}>03:00 PM</MenuItem>
              <MenuItem value={"4:00 PM"}>04:00 PM</MenuItem>
              <MenuItem value={"5:00 PM"}>05:00 PM</MenuItem>
              <MenuItem value={"6:00 PM"}>06:00 PM</MenuItem>
              <MenuItem value={"7:00 PM"}>07:00 PM</MenuItem>
              <MenuItem value={"8:00 PM"}>08:00 PM</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DemoContainer>
      <Box my={2}>
        <Typography>
          Need help? We are here for you! You can chat with us here.
        </Typography>
      </Box>
      <Hidden mdDown>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleContinueClick}>
            Continue
          </Button>
        </Box>
      </Hidden>
    </LocalizationProvider>
  );
}
