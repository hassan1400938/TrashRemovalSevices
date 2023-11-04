import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function ChooseAService() {
  return (
    <Box>
      <Typography variant="body1">Choose a service</Typography>
      <Typography variant="body2" mt={2}>
        What do you need?
      </Typography>
      <Button variant="outlined" size="large">
        Waste Removal
        <Typography>$79</Typography>
      </Button>
      <Button variant="outlined" size="large">
        Cardboard Removal
        <Typography>$80</Typography>
      </Button>
      <Button variant="outlined" size="large">
        Dempster Rental
        <Typography>$100</Typography>
      </Button>
      <Typography variant="body2" mt={2}>
        Check if we serve in your area
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter your ZIP code"
        variant="outlined"
      />
    </Box>
  );
}
