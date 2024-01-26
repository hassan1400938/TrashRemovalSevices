import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";

export default function CusotmRadioButtons({
  radioButtonData,
  handleSelection,
}) {
  return (
    <RadioGroup
      aria-label="choose-a-service-radio-group"
      name="choose-a-service-radio-group"
      // defaultValue={radioButtonData[0].name} // Set the default value based on your data
      sx={{
        flexDirection: "row",
        gap: 2,
      }}
    >
      {radioButtonData.map((value) => (
        <FormControlLabel
          value={value.name}
          key={value.name}
          onChange={() => handleSelection(value)}
          control={
            <Radio
              sx={{
                display: "none",
                "&.Mui-checked + .MuiFormControlLabel-label": {
                  backgroundColor: (theme) => theme.palette.primary.lightest,
                  color: (theme) => theme.palette.primary.dark,
                  borderRadius: "md",
                  borderColor: (theme) => theme.palette.primary.light,
                },
                "&.Mui-checked + .MuiFormControlLabel-label > .icon": {
                  display: "block",
                },
              }}
            />
          }
          label={
            <Box
              sx={{
                p: 2,
                borderRadius: 1.5,
                border: 0.8,
                boxShadow: "sm",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // gap: 1.5,
                minWidth: 120,
              }}
              variant="outlined"
            >
              <img
                width={80}
                alt={value.name}
                src={`/src/assets/images/${value.icon}`}
              />
              <Box sx={{ pt: 2 }}>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  {value.name}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  {value.desc !== "" ? `${value.desc} - ` : ""} $ {value.price}
                </Typography>
              </Box>
            </Box>
          }
        />
      ))}
    </RadioGroup>
  );
}
