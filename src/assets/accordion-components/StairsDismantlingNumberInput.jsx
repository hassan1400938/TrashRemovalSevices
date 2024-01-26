import React, { useState } from "react";
import { IconButton, Box, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useTheme } from "@emotion/react";

const StairsDismantlingNumberInput = ({ onQuantityPQChange }) => {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event) => {
    // Don't update the state when the user types manually
    if (
      event.type === "click" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    ) {
      const newQuantity = parseInt(event.target.value, 10);
      onQuantityPQChange(newQuantity);
    }
  };
  const handleIncrement = () => {
    setQuantity((prevQty) => prevQty + 1);
    onQuantityPQChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQty) => prevQty - 1);
      onQuantityPQChange(quantity - 1);
    }
  };

  return (
    <Box>
      <IconButton
        onClick={handleDecrement}
        disabled={quantity === 1}
        sx={{
          "&:disabled": {
            color: theme.palette.primary.lightest,
          },
        }}
      >
        <RemoveCircleIcon color={quantity !== 1 ? "primary" : "inherit"} />
      </IconButton>
      <TextField
        value={quantity}
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
        readOnly
        size="small"
        inputProps={{
          style: {
            width: "15px",
            textAlign: "center",
            fontSize: "0.8em",
            backgroundColor: theme.palette.primary.lightest,
          },
          min: 1,
        }}
      />
      <IconButton onClick={handleIncrement}>
        <AddCircleIcon color="primary" />
      </IconButton>
    </Box>
  );
};

export default StairsDismantlingNumberInput;
