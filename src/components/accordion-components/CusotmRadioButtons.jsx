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
        marginX: 1.5,
        flexDirection: "row",
        gap: 2,
        minWidth: { xs: "100%", sm: "100%", md: 180 },
      }}>
      {radioButtonData.map((value) => (
        <FormControlLabel
          sx={{
            width: { xs: "100%", sm: 180, md: 180 }, // Set width for xs, sm and md screens
          }}
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
                width: { xs: "100%", sm: "100%", md: 180 },
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
                flexDirection: { xs: "row", sm: "column", md: "column" },
                alignItems: "center",
                // gap: 1.5,
                // minWidth: 180,
                width: { xs: "100%", sm: "100%", md: 180 },
              }}
              variant="outlined">
              <img
                width={80}
                alt={value.name}
                src={`/TrashRemovalServices/images/${value.icon}`}
              />
              <Box
                sx={{
                  pt: { xs: 0, sm: 2, md: 2 },
                  width: { xs: "100%", sm: "100%", md: 180 },
                }}>
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
