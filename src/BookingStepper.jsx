import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function BookingStepper() {
  const steps = [
    "Pick a Service",
    "Date and Time",
    "Task Description",
    "Frequency",
    "Review Your Order",
    "Payment",
  ];

  return (
    <Box sx={{ width: "100%" }} className="stepper">
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
