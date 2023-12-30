import React from "react";
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MobileDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import moment from "moment";

export default function DateTime({ formData, updateFormData }) {
  const [pickupDate, setPickupDate] = React.useState(null);
  const [pickupTime, setPickupTime] = React.useState("");

  React.useEffect(() => {
    console.log("Pickup Date:" + pickupDate);

    // Parse the string to a Date object

    const pickupDateObject = moment(pickupDate);

    if (pickupDateObject.isValid()) {
      const formattedPickupDate = pickupDateObject.format("ddd, MMM D, YYYY");
      console.log(formattedPickupDate);
      // Update date in formData

      updateFormData((prevFormData) => {
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

      console.log(
        "data.date: " + formData.data.price_quote.date_time.pickup_date
      );
    } else {
      console.error("Invalid date string:", pickupDate);
    }
  }, [pickupDate]);
  React.useEffect(() => {
    console.log("Pickup Time:" + pickupTime);

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
    console.log(
      "data.time: " + formData.data.price_quote.date_time.pickup_time
    );
  }, [pickupTime]);

  const handleDateChange = (newDate) => {
    console.log("handleDateChange Called");

    setPickupDate(newDate);

    // Reset the time when the date changes
    setPickupTime("");
  };

  const handlePickupTimeChange = (event) => {
    // console.log(event.target.value);
    setPickupTime(event.target.value);
  };

  const handleClick = () => {};

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="body1">Pickup</Typography>
      <Typography variant="body1" mt={2} onClick={handleClick}>
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
          shouldDisableDate={(date) => {
            // Disable dates in the past
            return date < new Date();
          }}
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
      <Typography variant="body2" mt={2}>
        Need help? We are here for you! You can chat with us here.
      </Typography>
      <Button variant="contained" size="large" onClick={handleClick}>
        Continue
      </Button>
    </LocalizationProvider>
  );
}
