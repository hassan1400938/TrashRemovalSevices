import React, { useState } from "react";
import { IconButton, Input, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ConfirmationDialog from "./ConfirmationDialog";

const AdditonalItemsNumberInput = ({
  itemPQIndex,
  quantityPQ,
  onQuantityPQChange,
  removeItemFromList,
}) => {
  const [quantity, setQuantity] = useState(quantityPQ);

  //For Confirmation Dialog
  const [openDialog, setOpenDialog] = React.useState(false);

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
    } else {
      // If the quantity is 1 or less, show the confirmation dialog
      setOpenDialog(true);
    }
  };

  const handleRemoveItem = () => {
    setOpenDialog(false);
    // Call the function to remove the item from the list
    removeItemFromList(itemPQIndex);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    // Optionally, reset the quantity to 1 or take other actions
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
      <ConfirmationDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleRemoveItem}
        title="Remove Item"
        content="Are you sure you want to remove this item from the list?"
      />
    </Box>
  );
};

export default AdditonalItemsNumberInput;
