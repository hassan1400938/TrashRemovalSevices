import React, { useState } from "react";
import { IconButton, Input, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const StairsDismantlingNumberInput = ({ onQuantityPQChange }) => {
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
      <IconButton onClick={handleDecrement}>
        <RemoveCircleIcon />
      </IconButton>
      <Input
        value={quantity}
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
        inputProps={{
          type: "number",
          style: { width: "40px", textAlign: "center" },
          min: 1,
        }}
      />
      <IconButton onClick={handleIncrement}>
        <AddCircleIcon />
      </IconButton>
    </Box>
  );
};

export default StairsDismantlingNumberInput;
