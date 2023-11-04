import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import { CheckBox } from "@mui/icons-material";

export default function ReviewOrderAddress() {
  return (
    <Box>
      <Typography variant="body1">Enter your address</Typography>
      <Box row>
        <Button variant="outlined" startIcon={<HomeIcon />}>
          Residential
        </Button>
        <Button variant="outlined" startIcon={<BusinessIcon />}>
          Business
        </Button>
      </Box>
      <Box>
        <Typography variant="body1">Check if we serve in your area</Typography>
        <TextField label="Company Name" variant="outlined" />
        <TextField
          label="Pickup Address"
          placeholder="Search places..."
          variant="outlined"
        />
        <TextField label="Apt Number (Optional)" variant="outlined" />
      </Box>
      <Box>
        <Typography variant="h4">Booking Details</Typography>
        <Typography variant="body2">November 07 2023, 11 AM.</Typography>
        <Typography variant="body2">Frequency - Once</Typography>
        <Typography variant="h6">
          Your transaction is protected by <strong>Stripe</strong>
        </Typography>
        <Typography variant="h6">
          I agree to the Terms of Service and Privacy Policy. As a business
          client, I have agreed to <strong>Corporate Service Agreement</strong>
        </Typography>
        <FormControlLabel
          required
          control={<Checkbox />}
          label="I agree to the Terms of Service and Privacy Policy. I agree to receive text messages regarding my service updates."
        />
        <Typography variant="body2">
          Need help? We are here for you! You can chat with us here.
        </Typography>
      </Box>
    </Box>
  );
}
