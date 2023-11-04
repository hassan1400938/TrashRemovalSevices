import React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";
export default function Frequency() {
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "400px",
    height: "200px",
  };

  return (
    <Box>
      <Typography variant="body2">
        Buy 2 bookings and save 20% on each booking! 1 booking from your bundle
        will be used today. Then, use the1 remaining bookings for any future
        service worth up to $95.00. You will be charged the difference if the
        booking is worth more than $95.00. Terms apply
      </Typography>
      <RadioGroup
        row
        aria-labelledby="frequency-buttons-group"
        name="frequency-radio-buttons-group"
      >
        <Button
          component="div"
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: 1 / 3,
          }}
        >
          <Box>
            <Typography variant="h5">1 Booking</Typography>
            <Typography variant="body2">$95</Typography>
          </Box>
          <FormControlLabel value="one-booking" control={<Radio />} />
        </Button>
        <Button
          component="div"
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: 1 / 3,
          }}
        >
          <Box>
            <Typography variant="h5">Bundle Booking</Typography>
            <Typography variant="body2">$56</Typography>
          </Box>
          <FormControlLabel value="bundle-booking" control={<Radio />} />
        </Button>
      </RadioGroup>
    </Box>
  );
}
